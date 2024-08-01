import { Response, Request } from 'express';
import UserService from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.userService.getAll();
    res.status(200).json(result);
  }

  async add(req: Request, res: Response): Promise<void> {
    const result = await this.userService.add(req.body);

    res.status(201).json(result);
  }
}

const userController = new UserController(new UserService());
export default userController;
