import { Application } from 'express';
import authRouter from './api/auth.route';

class AppRouter {
  constructor(private app: Application) {}

  init(): void {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/auth', authRouter);
  }
}

export default AppRouter;
