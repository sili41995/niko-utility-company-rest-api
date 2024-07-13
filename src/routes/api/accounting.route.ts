import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import accountingController from '../../controllers/accounting.controller';
import { paymentsSchemas, priceAdjustmentSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllPeriodsCtrl = ctrlWrapper(accountingController.getAllPeriods.bind(accountingController));
const addPeriodCtrl = ctrlWrapper(accountingController.addPeriod.bind(accountingController));
const addPriceAdjustmentCtrl = ctrlWrapper(accountingController.addPriceAdjustment.bind(accountingController));
const getPricesCtrl = ctrlWrapper(accountingController.getPrices.bind(accountingController));
const calculatePricesCtrl = ctrlWrapper(accountingController.calculatePrices.bind(accountingController));
const addPaymentCtrl = ctrlWrapper(accountingController.addPayment.bind(accountingController));

// periods
router.get(Endpoints.periods, getAllPeriodsCtrl);
router.post(Endpoints.periods, addPeriodCtrl);
// prices
router.get(Endpoints.prices, getPricesCtrl);
router.patch(Endpoints.prices, calculatePricesCtrl);
router.post(Endpoints.prices, validateBody(priceAdjustmentSchemas.add), addPriceAdjustmentCtrl);
// payments
router.post(Endpoints.payments, validateBody(paymentsSchemas.add), addPaymentCtrl);

export default router;
