import express from 'express';
// import { getCards, getCard, createCard, updateCard, deleteCard } from '../controllers/card';
import card from "./routes/card";
import races from "./routes/races";
import types from "./routes/types"

const app = express();
app.use(express.json()); // middleware que transforma el body en un objeto json

const port = 3000;

app.get('/', (_req, res) => {
    console.log('GET /');
    res.send('Yu-Gi-Oh APP');
});

app.use('/card', card);
app.use('/races', races);
app.use('/types', types)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});