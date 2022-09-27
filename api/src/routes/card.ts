import express from 'express'; // importamos express
import { getCards } from '../controllers/cardController'; // importamos el controlador

const router = express.Router();

router.get('/', getCards);

export default router;