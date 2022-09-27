import { Request, Response } from "express";
const axios = require('axios');

export const getCards = async (_req: Request, res: Response) => {
    try {
        const response = await (axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=0&num=100'));
        
        const cards = response.data.data.map((card: any) => {
            return {
                id: card.id,
                name: card.name,
                type: card.type,
                description: card.desc,
                atk: card.atk,
                def: card.def,
                level: card.level,
                img: card.card_images[0].image_url,
            }
        });

        res.status(200).json(cards);
    } catch (error) {
        console.log(error);
    }
};

