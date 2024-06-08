import { Response, Request } from 'express';
import UserService from '../services/user.service';
import { IAuthRequest } from '../types/auth.type';
import { httpError } from '../utils';
import { Endpoints } from '../constants';

export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  async add(req: Request, res: Response): Promise<void> {
    const result = await this.userService.addUser(req.body);

    res.status(201).json(result);
  }

  async updateById(req: IAuthRequest, res: Response): Promise<void> {
    // if (!req.user) {
    //   throw httpError({ status: 400 });
    // }

    const dynamicId = req.params[Endpoints.dynamicId];
    const id = Number(dynamicId);
    const result = await this.userService.updateById({
      id,
      data: req.body,
    });

    res.status(200).json(result);
  }
}

const userController = new UserController(new UserService());
export default userController;
