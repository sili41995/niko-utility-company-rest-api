import { Endpoints } from '../../constants';
import authController from '../../controllers/auth.controller';
// import auth from '@/middlewares/auth.middleware';
import { Router } from 'express';
import { userSchemas } from '../../schemas';
import { ctrlWrapper, validateBody } from '../../middlewares';

const router: Router = Router();

// const registerCtrl = ctrlWrapper(userController.register.bind(userController));
const loginCtrl = ctrlWrapper(authController.signIn.bind(authController));
// const logoutCtrl = ctrlWrapper(userController.logout.bind(userController));
// const currentCtrl = ctrlWrapper(userController.current.bind(userController));
// const restorePasswordCtrl = ctrlWrapper(userController.restorePassword.bind(userController));
// const updatePasswordCtrl = ctrlWrapper(userController.updatePassword.bind(userController));

// router.post(Endpoints.register, validateBody(userSchemas.registerSchema), registerCtrl);
router.post(Endpoints.login, validateBody(userSchemas.loginSchema), loginCtrl);
// router.post(Endpoints.logout, auth, logoutCtrl);
// router.get(Endpoints.current, auth, currentCtrl);
// router.post(Endpoints.restorePass, validateBody(userSchemas.restorePasswordSchema), restorePasswordCtrl);
// router.patch(Endpoints.updatePass, validateBody(userSchemas.updatePasswordSchema), updatePasswordCtrl);

export default router;
