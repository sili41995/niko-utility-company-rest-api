import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';
import accountingController from '../../controllers/accounting.controller';

const router: Router = Router();

router.use(auth);

const getAllPeriodsCtrl = ctrlWrapper(accountingController.getAllPeriods.bind(accountingController));
const addPeriodCtrl = ctrlWrapper(accountingController.addPeriod.bind(accountingController));

router.get(Endpoints.periods, getAllPeriodsCtrl);
router.post(Endpoints.periods, addPeriodCtrl);

export default router;
