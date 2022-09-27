import express from 'express'; // importamos express
import { getTypes } from '../controllers/typeController'; // importamos el controlador

const router = express.Router();

router.get('/', getTypes);

export default router;