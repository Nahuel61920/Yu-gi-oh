import { Request, Response } from "express";
const axios = require('axios');

export const getCards = async (_req: Request, res: Response) => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
            params : {
                offset: 0,
                num: 200
            }
        });
        
        const cards = response.data.data.map((card: any) => {
            return {
                id: card.id,
                name: card.name,
                type: card.type,
                img: card.card_images[0].image_url,
            }
        });
        res.status(200).json(cards);
    } catch (error) {
        console.log(error);
    }
};

export const getCard = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
            params : {
                id: req.params.id
            }
        });

        const card = response.data.data.map((card: any) => {
            return {
                id: card.id,
                name: card.name,
                type: card.type,
                description: card.desc,
                atk: card.atk,
                def: card.def,
                level: card.level,
                race: card.race,
                attribute: card.attribute,
                img: card.card_images[0].image_url,
            }
        })

        res.status(200).json(card[0]);

    } catch (error) {
        console.log(error);
    }
};


