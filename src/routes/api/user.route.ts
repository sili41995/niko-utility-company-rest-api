import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';
import userController from '../../controllers/user.controller';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(userController.getAll.bind(userController));
const addCtrl = ctrlWrapper(userController.add.bind(userController));

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, addCtrl);

export default router;
