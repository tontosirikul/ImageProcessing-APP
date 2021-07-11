import fs from "fs";
import config from "../config";
export function checkFileInput(image: string): boolean {
  try {
    fs.accessSync(`${config.ASSETS_FOLDER}/full/${image}.jpg`);
    return true;
  } catch (e) {
    return false;
  }
}

export function checkFileOutput(
  image: string,
  width: number | null,
  height: number | null
): boolean {
  try {
    fs.accessSync(
      `${config.ASSETS_FOLDER}/thumbnail/${image}(${width ? "w:" + width : ""}${
        height ? "h:" + height : ""
      }).jpg`
    );
    return true;
  } catch (e) {
    return false;
  }
}
