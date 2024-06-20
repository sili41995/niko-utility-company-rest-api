import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import subscriberAccountController from '../../controllers/subscriberAccount.controller';
import { subscriberAccountSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(subscriberAccountController.getAll.bind(subscriberAccountController));
const addCtrl = ctrlWrapper(subscriberAccountController.add.bind(subscriberAccountController));

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, validateBody(subscriberAccountSchemas.add), addCtrl);

export default router;
