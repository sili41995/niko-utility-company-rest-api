import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { UserData, NewUser, IUpdateUserByIdProps, Users } from '../types/user.type';
import { httpError } from '../utils';
import bcrypt from 'bcryptjs';

// const { SECRET_KEY } = process.env;

class UserService {
  async getAll(): Promise<Users> {
    const result = await prisma.user.findMany();

    return result;
  }

  async add(data: NewUser): Promise<UserData> {
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

  async updateById({ id, data }: IUpdateUserByIdProps): Promise<UserData> {
    const result = await prisma.user.update({ where: { id }, data });
    return result;
  }
}

export default UserService;
