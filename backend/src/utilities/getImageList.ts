import fs from "fs";
import config from "../config";

export const getImageList = (): string[] => {
  try {
    const files_: string[] = [];
    const dir = `${config.ASSETS_FOLDER}/full/`;
    const files = fs.readdirSync(dir);
    for (const i in files) {
      files_.push(files[i]);
    }
    return files_;
  } catch (error) {
    return [];
  }
};
