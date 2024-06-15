import { Endpoints } from '../../constants';
import authController from '../../controllers/auth.controller';
import { Router } from 'express';
import { userSchemas } from '../../schemas';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';

const router: Router = Router();

const loginCtrl = ctrlWrapper(authController.signIn.bind(authController));
const currentCtrl = ctrlWrapper(authController.current.bind(authController));

router.post(Endpoints.login, validateBody(userSchemas.login), loginCtrl);
router.get(Endpoints.current, auth, currentCtrl);

export default router;
