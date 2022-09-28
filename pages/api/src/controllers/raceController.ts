import { raceMonster, raceSpell, raceTrap } from "../racesDB";
import { Request, Response } from "express";

export const getRaceMonster = async (_req: Request, res: Response) => {
    try {
        res.status(200).json(raceMonster);
    } catch (error) {
        console.log(error);
    }
};

export const getRaceSpell = (_req: Request, res: Response) => {
    try{
        res.status(200).json(raceSpell);
    } catch (error) {
        console.log(error);
    }
};

export const getRaceTrap = (_req: Request, res: Response) => {
    try{
        res.status(200).json(raceTrap);
    } catch (error) {
        console.log(error);
    }
}