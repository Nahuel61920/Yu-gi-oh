import { Request, Response } from "express";
const axios = require('axios');

export const getCards = async (_req: Request, res: Response) => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
            /* params : {
                offset: 0,
                num: 2000,
            } */
        });
        
        const cards = response.data.data.map((card: any) => {

            let cardData = {
                id: card.id,
                name: card.name,
                type: card.type,
                atk: card.atk || null,
                def: card.def || null,
                level: card.level || null,
                attribute: card.attribute,
                img: card.card_images[0].image_url,
                img_small: card.card_images[0].image_url_small,
            }

            if(card.type === "Spell Card") {
                return  {
                    ...cardData,
                    race: card.race + " Spell"
                }
            } else if (card.type === "Trap Card") {
                return  {
                    ...cardData,
                    race: card.race + " Trap",
                }
            }
                

            return {
                ...cardData,
                race: card.race,
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
                card_sets: card.card_sets,
                card_prices: card.card_prices
            }
        })

        res.status(200).json(card[0]);

    } catch (error) {
        console.log(error);
    }
};
