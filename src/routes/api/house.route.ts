import { Router } from 'express';
import { Endpoints } from '../../constants';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import houseController from '../../controllers/house.controller';
import { houseSchemas } from '../../schemas';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(houseController.getAll.bind(houseController));
const getByStreetIdCtrl = ctrlWrapper(houseController.getByStreetId.bind(houseController));
const addCtrl = ctrlWrapper(houseController.add.bind(houseController));

router.get(Endpoints.root, getAllCtrl);
router.get(`/:${Endpoints.dynamicId}`, getByStreetIdCtrl);
router.post(Endpoints.root, validateBody(houseSchemas.add), addCtrl);

export default router;
