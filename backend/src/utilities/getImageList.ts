import fs from "fs";
import config from "../config";
import path from "path";
export const getImageList = (): string[] => {
  try {
    const files_: string[] = [];
    const dir = `${config.ASSETS_FOLDER}/full/`;
    const files = fs.readdirSync(dir);
    for (const i in files) {
      files_.push(path.parse(files[i]).name);
    }
    return files_;
  } catch (error) {
    return [];
  }
};
