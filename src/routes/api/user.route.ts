import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, isValidId, userIsExist, validateBody } from '../../middlewares';
import userController from '../../controllers/user.controller';
import { userSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(userController.getAll.bind(userController));
const addCtrl = ctrlWrapper(userController.add.bind(userController));
const updateByIdCtrl = ctrlWrapper(userController.updateById.bind(userController));

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, addCtrl);
router.patch(Endpoints.fullAccess, isValidId, userIsExist, validateBody(userSchemas.updateFullAccess), updateByIdCtrl);
router.patch(Endpoints.houses, isValidId, userIsExist, validateBody(userSchemas.updateHousesAccess), updateByIdCtrl);
router.patch(Endpoints.subscribers, isValidId, userIsExist, validateBody(userSchemas.updateSubscribersAccess), updateByIdCtrl);
router.patch(Endpoints.accounting, isValidId, userIsExist, validateBody(userSchemas.updateAccountingAccess), updateByIdCtrl);
router.patch(Endpoints.documents, isValidId, userIsExist, validateBody(userSchemas.updateDocumentsAccess), updateByIdCtrl);
router.patch(Endpoints.counters, isValidId, userIsExist, validateBody(userSchemas.updateCountersAccess), updateByIdCtrl);
router.patch(Endpoints.oneOffJobs, isValidId, userIsExist, validateBody(userSchemas.updateOneOffJobsAccess), updateByIdCtrl);
router.patch(Endpoints.settings, isValidId, userIsExist, validateBody(userSchemas.updateSettingsAccess), updateByIdCtrl);

export default router;
