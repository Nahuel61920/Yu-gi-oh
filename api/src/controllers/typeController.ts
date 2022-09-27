import { types } from "../typesDB";
import { Request, Response } from "express";

export const getTypes = async (_req: Request, res: Response) => {
    try {
        res.status(200).json(types);
    } catch (error) {
        console.log(error);
    }
};