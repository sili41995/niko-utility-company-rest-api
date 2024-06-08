import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import userController from '../../controllers/user.controller';
import { userSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const addUserCtrl = ctrlWrapper(userController.add.bind(userController));
const updateByIdCtrl = ctrlWrapper(userController.updateById.bind(userController));

router.post(Endpoints.root, addUserCtrl);
router.patch(Endpoints.fullAccess, validateBody(userSchemas.updateFullAccessSchema), updateByIdCtrl);
router.patch(Endpoints.houses, validateBody(userSchemas.updateHousesAccessSchema), updateByIdCtrl);
router.patch(Endpoints.subscribers, validateBody(userSchemas.updateSubscribersAccessSchema), updateByIdCtrl);
router.patch(Endpoints.accounting, validateBody(userSchemas.updateAccountingAccessSchema), updateByIdCtrl);
router.patch(Endpoints.documents, validateBody(userSchemas.updateDocumentsAccessSchema), updateByIdCtrl);
router.patch(Endpoints.counters, validateBody(userSchemas.updateCountersAccessSchema), updateByIdCtrl);
router.patch(Endpoints.oneOffJobs, validateBody(userSchemas.updateOneOffJobsAccessSchema), updateByIdCtrl);
router.patch(Endpoints.settings, validateBody(userSchemas.updateSettingsAccessSchema), updateByIdCtrl);

export default router;
