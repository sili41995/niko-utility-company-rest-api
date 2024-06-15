import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, userIsExist, validateBody } from '../../middlewares';
import userController from '../../controllers/user.controller';
import { userSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(userController.getAll.bind(userController));
const addCtrl = ctrlWrapper(userController.add.bind(userController));
const updateByIdCtrl = ctrlWrapper(userController.updateById.bind(userController));

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, addCtrl);
router.patch(Endpoints.fullAccess, userIsExist, validateBody(userSchemas.updateFullAccess), updateByIdCtrl);
router.patch(Endpoints.houses, userIsExist, validateBody(userSchemas.updateHousesAccess), updateByIdCtrl);
router.patch(Endpoints.subscribers, userIsExist, validateBody(userSchemas.updateSubscribersAccess), updateByIdCtrl);
router.patch(Endpoints.accounting, userIsExist, validateBody(userSchemas.updateAccountingAccess), updateByIdCtrl);
router.patch(Endpoints.documents, userIsExist, validateBody(userSchemas.updateDocumentsAccess), updateByIdCtrl);
router.patch(Endpoints.counters, userIsExist, validateBody(userSchemas.updateCountersAccess), updateByIdCtrl);
router.patch(Endpoints.oneOffJobs, userIsExist, validateBody(userSchemas.updateOneOffJobsAccess), updateByIdCtrl);
router.patch(Endpoints.settings, userIsExist, validateBody(userSchemas.updateSettingsAccess), updateByIdCtrl);

export default router;
