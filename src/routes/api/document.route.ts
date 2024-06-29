import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';
import documentController from '../../controllers/document.controller';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(documentController.getAll.bind(documentController));

router.get(Endpoints.root, getAllCtrl);

export default router;
