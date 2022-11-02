import express from 'express'; // importamos express
import { getCards, getCard } from '../controllers/cardController'; // importamos el controlador

const router = express.Router();

router.get('/', getCards);
router.get('/:id', getCard);

export default router;