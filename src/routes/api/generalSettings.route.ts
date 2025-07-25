import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, generalSettingsIsExist, isValidId, validateBody } from '../../middlewares';
import generalSettingsController from '../../controllers/generalSettings.controller';
import { generalSettingsSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getCtrl = ctrlWrapper(generalSettingsController.get.bind(generalSettingsController));
const updateByIdCtrl = ctrlWrapper(generalSettingsController.updateById.bind(generalSettingsController));

router.get(Endpoints.root, getCtrl);
router.put(Endpoints.updateById, isValidId, generalSettingsIsExist, validateBody(generalSettingsSchemas.updateById), updateByIdCtrl);

export default router;
