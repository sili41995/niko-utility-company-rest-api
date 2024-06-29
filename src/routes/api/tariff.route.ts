import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import tariffController from '../../controllers/tariff.controller';
import { tariffSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(tariffController.getAll.bind(tariffController));
const addCtrl = ctrlWrapper(tariffController.add.bind(tariffController));

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, validateBody(tariffSchemas.add), addCtrl);

export default router;
