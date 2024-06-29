import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper } from '../../middlewares';
// import priceController from '../../controllers/price.controller';

const router: Router = Router();

router.use(auth);

// const calculatePricesCtrl = ctrlWrapper(priceController.getAll.bind(priceController));

// router.get(Endpoints.root, calculatePricesCtrl);

export default router;
