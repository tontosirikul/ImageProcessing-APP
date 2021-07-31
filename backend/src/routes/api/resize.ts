import express from "express";
import { checkFileInput, checkFileOutput } from "../../utilities/checkFile";
import { resizeImage } from "../../utilities/resizeImage";
import config from "../../config";

const resize = express.Router();

resize.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    // get query and image path

    const image = req.query.image as string;
    const width = req.query.width ? parseInt(req.query.width as string) : null;
    const height = req.query.height
      ? parseInt(req.query.height as string)
      : null;
    console.log(image, width, height);
    const inputExist: boolean = checkFileInput(image);
    console.log(inputExist);
    if (inputExist) {
      // atleast one of this not null
      if (width != null || height != null) {
        const outputExist: boolean = checkFileOutput(image, width, height);
        // if output exists then show
        if (outputExist) {
          try {
            res.sendFile(
              `${config.ASSETS_FOLDER}/thumbnail/${image}(${
                width ? "w:" + width : ""
              }${height ? "h:" + height : ""}).jpg`
            );
          } catch (error) {
            res.send("please specify the proper size");
          }
        }
        // if not exits then create new one
        else {
          try {
            await resizeImage(image, width, height);
            res.sendFile(
              `${config.ASSETS_FOLDER}/thumbnail/${image}(${
                width ? "w:" + width : ""
              }${height ? "h:" + height : ""}).jpg`
            );
          } catch (error) {
            res.send("please specify the proper size");
          }
        }
      }
      // tell them to specify the size
      else {
        res.send("please specify the proper size");
      }
    }
    // no file exist
    else {
      res.send("No file");
    }
  }
);

export default resize;
