import express from 'express'; // importamos express
import { getRaceMonster, getRaceSpell, getRaceTrap } from '../controllers/raceController'; // importamos el controlador

const router = express.Router();

router.get('/monster', getRaceMonster);
router.get('/spell', getRaceSpell);
router.get('/trap', getRaceTrap);

export default router;