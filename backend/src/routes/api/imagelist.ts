import express from "express";
import { getImageList } from "../../utilities/getImageList";
import fs from "fs";
import config from "../../config";
const imagelist = express.Router();

imagelist.get(
  "/",
  async (_req: express.Request, res: express.Response): Promise<void> => {
    try {
      const result: string[] | void = getImageList();
      res.json({ imagelist: result });
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
);

export default imagelist;
