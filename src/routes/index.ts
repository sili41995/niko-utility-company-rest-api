import { Application } from 'express';
import authRouter from './api/auth.route';
import userRouter from './api/user.route';

class AppRouter {
  constructor(private app: Application) {}

  init(): void {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/user', userRouter);
  }
}

export default AppRouter;
