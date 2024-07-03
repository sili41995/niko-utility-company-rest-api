import { Response, Request } from 'express';
import AuthService from '../services/auth.service';
import { IAuthRequest } from '../types/auth.type';
import { httpError } from '../utils';

export class AuthController {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  async signIn(req: Request, res: Response): Promise<void> {
    const result = await this.authService.signIn(req.body);

    res.status(200).json(result);
  }

  async current(req: IAuthRequest, res: Response): Promise<void> {
    if (!req.user) {
      throw httpError({ status: 401 });
    }

    res.status(200).json(req.user);
  }
}

const authController = new AuthController(new AuthService());
export default authController;
