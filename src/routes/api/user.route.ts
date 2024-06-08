import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';
import userController from '../../controllers/user.controller';

const router: Router = Router();

router.use(auth);

const addUserCtrl = ctrlWrapper(userController.add.bind(userController));
const updateByIdCtrl = ctrlWrapper(userController.updateById.bind(userController));

router.post(Endpoints.user, auth, addUserCtrl);
router.post('/user/:userId/fullAccess', auth, updateByIdCtrl);

export default router;
