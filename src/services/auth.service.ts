import { prisma } from '../app';
import { ErrorMessages, ProfileSettings } from '../constants';
import { UserData, NewUser } from '../types/user.type';
import { Credentials, SignInRes } from '../types/auth.type';
import { generateToken, httpError } from '../utils';
import bcrypt from 'bcryptjs';

const { SECRET_KEY } = process.env;

class AuthService {
  async signIn({ login, password }: Credentials): Promise<SignInRes> {
    const user = await prisma.user.findUnique({ where: { login } });
    const isValidPassword = await bcrypt.compare(password as string, user?.password ?? '');

    if (!user || !isValidPassword) {
      throw httpError({
        status: 401,
        message: ErrorMessages.incorrectCredentialsErr,
      });
    }

    if (!SECRET_KEY) {
      throw httpError({ status: 400 });
    }

    const token = generateToken({
      expiresIn: String(ProfileSettings.tokenExpiresIn),
      secretKey: SECRET_KEY,
      id: user.id,
    });

    const result = await prisma.user.update({
      where: { login },
      data: { token },
      select: { token: true },
    });

    return result;
  }

  async addUser(data: NewUser): Promise<UserData> {
    const { login, password } = data;
    const user = await prisma.user.findUnique({ where: { login } });

    if (user) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateLoginErr,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
      data: { ...data, password: hashPassword },
      select: {
        id: true,
        name: true,
        login: true,
        email: true,
        fullAccess: true,
        houses: true,
        subscribers: true,
        accounting: true,
        documents: true,
        counters: true,
        oneOffJobs: true,
        settings: true,
      },
    });

    return result;
  }
}

export default AuthService;
