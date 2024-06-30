import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';

const router: Router = Router();

router.use(auth);

// const getPricesCtrl = ctrlWrapper(accountingController.getPrices.bind(accountingController));

// router.get(Endpoints.prices, getPricesCtrl);

export default router;
