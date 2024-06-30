import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';
import accountingController from '../../controllers/accounting.controller';

const router: Router = Router();

router.use(auth);

const calculatePricesCtrl = ctrlWrapper(accountingController.calculatePrices.bind(accountingController));

router.put(Endpoints.prices, calculatePricesCtrl);

export default router;
