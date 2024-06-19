import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import subscriberAccountController from '../../controllers/subscriberAccount.controller';
import { streetSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(subscriberAccountController.getAll.bind(subscriberAccountController));
// const addCtrl = ctrlWrapper(streetController.add.bind(streetController));

router.get(Endpoints.root, getAllCtrl);
// router.post(Endpoints.root, validateBody(streetSchemas.add), addCtrl);

export default router;
