import { Application } from 'express';
import authRouter from './api/auth.route';
import userRouter from './api/user.route';
import generalSettingsRouter from './api/generalSettings.route';
import streetRouter from './api/street.route';

class AppRouter {
  constructor(private app: Application) {}

  init(): void {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/users', userRouter);
    this.app.use('/api/general-settings', generalSettingsRouter);
    this.app.use('/api/streets', streetRouter);
  }
}

export default AppRouter;
