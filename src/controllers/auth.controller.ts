import { Response, Request } from 'express';
import AuthService from '@/services/auth.service';
// import { httpError, sendEmail } from '@/utils';
// import { AuthProps, Endpoints } from '@/constants';
// import { IAuthRequest } from '@/types/auth.type';

export class AuthController {
  constructor(private userService: AuthService) {
    this.userService = userService;
  }

  async signIn(req: Request, res: Response): Promise<void> {
    const result = await this.userService.signIn(req.body);
    res.status(200).json(result);
  }
}

const userController = new AuthController(new AuthService());
export default userController;
