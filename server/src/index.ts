import express from 'express';
// import { getCards, getCard, createCard, updateCard, deleteCard } from '../controllers/card';
import card from "./routes/card";
import races from "./routes/races";
import types from "./routes/types";

var cors = require('cors')

const app = express();
app.use(express.json()); // middleware que transforma el body en un objeto json

app.set("port", process.env.PORT || 3001);

app.get('/', (_req, res) => {
    console.log('GET /');
    res.send('Yu-Gi-Oh APP');
});

app.use(cors());

app.use('/card', card);
app.use('/races', races);
app.use('/types', types)

const host = process.env.HOST || "0.0.0.0";

app.listen(app.get("port"), host, () => {
    console.log("Ya me levanté EN EL PUERTO: " + app.get("port"));
});