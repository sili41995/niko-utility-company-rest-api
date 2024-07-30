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
const addPricesCtrl = ctrlWrapper(accountingController.addPrices.bind(accountingController));
const getAllPaymentsCtrl = ctrlWrapper(accountingController.getAllPayments.bind(accountingController));
const addPaymentCtrl = ctrlWrapper(accountingController.addPayment.bind(accountingController));
const addPaymentsCtrl = ctrlWrapper(accountingController.addPayments.bind(accountingController));
const getInvoicesCtrl = ctrlWrapper(accountingController.getInvoices.bind(accountingController));
const getPaymentsBySourcePostageCtrl = ctrlWrapper(accountingController.getPaymentsBySourcePostage.bind(accountingController));
const getPaymentsBySourcePrivatbankCtrl = ctrlWrapper(accountingController.getPaymentsBySourcePrivatbank.bind(accountingController));
const getPaymentsBySourceOshchadbankCtrl = ctrlWrapper(accountingController.getPaymentsBySourceOshchadbank.bind(accountingController));
const getPaymentsBySourceAbankCtrl = ctrlWrapper(accountingController.getPaymentsBySourceAbank.bind(accountingController));
const getReportsByStreetsCtrl = ctrlWrapper(accountingController.getReportsByStreets.bind(accountingController));

// periods
router.get(Endpoints.periods, getAllPeriodsCtrl);
router.post(Endpoints.periods, addPeriodCtrl);
// prices
router.get(Endpoints.prices, getPricesCtrl);
router.patch(Endpoints.prices, addPricesCtrl);
router.post(Endpoints.prices, validateBody(priceAdjustmentSchemas.add), addPriceAdjustmentCtrl);
// payments
router.get(Endpoints.payments, getAllPaymentsCtrl);
router.post(Endpoints.payments, validateBody(paymentsSchemas.add), addPaymentCtrl);
router.post(Endpoints.multiplePayments, validateBody(paymentsSchemas.addMany), addPaymentsCtrl);
router.get(Endpoints.invoices, getInvoicesCtrl);
router.get(Endpoints.postagePayments, getPaymentsBySourcePostageCtrl);
router.get(Endpoints.privatbankPayments, getPaymentsBySourcePrivatbankCtrl);
router.get(Endpoints.oshchadbankPayments, getPaymentsBySourceOshchadbankCtrl);
router.get(Endpoints.abankPayments, getPaymentsBySourceAbankCtrl);
// reports
router.get(Endpoints.reportsByStreets, getReportsByStreetsCtrl);

export default router;
