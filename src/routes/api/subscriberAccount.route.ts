import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, isValidId, validateBody, subscriberAccountIsExist } from '../../middlewares';
import subscriberAccountController from '../../controllers/subscriberAccount.controller';
import { subscriberAccountSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(subscriberAccountController.getAll.bind(subscriberAccountController));
const addCtrl = ctrlWrapper(subscriberAccountController.add.bind(subscriberAccountController));
const updateByIdCtrl = ctrlWrapper(subscriberAccountController.updateById.bind(subscriberAccountController));

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, validateBody(subscriberAccountSchemas.add), addCtrl);
router.put(Endpoints.settings, isValidId, subscriberAccountIsExist, validateBody(subscriberAccountSchemas.updateById), updateByIdCtrl);

export default router;
