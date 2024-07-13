import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, isValidId, subscriberAccountIsExist, validateBody } from '../../middlewares';
import accountingController from '../../controllers/accounting.controller';
import { subscriberAccountSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllPeriodsCtrl = ctrlWrapper(accountingController.getAllPeriods.bind(accountingController));
const addPeriodCtrl = ctrlWrapper(accountingController.addPeriod.bind(accountingController));
const updatePriceByIdCtrl = ctrlWrapper(accountingController.updatePriceById.bind(accountingController));

router.get(Endpoints.periods, getAllPeriodsCtrl);
router.post(Endpoints.periods, addPeriodCtrl);
router.patch(`${Endpoints.prices}/:${Endpoints.dynamicId}`, isValidId, subscriberAccountIsExist, validateBody(subscriberAccountSchemas.updatePriceById), updatePriceByIdCtrl);

export default router;
