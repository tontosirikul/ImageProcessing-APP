import sharp from "sharp";
import config from "../config";

export const resizeImage = async (
  imageName: string,
  width?: number | null,
  height?: number | null
): Promise<void> => {
  try {
    await sharp(`${config.ASSETS_FOLDER}/full/${imageName}.jpg`)
      .resize(width, height)
      .toFile(
        `${config.ASSETS_FOLDER}/thumbnail/${imageName}(${
          width ? "w:" + width : ""
        }${height ? "h:" + height : ""}).jpg`
      );
  } catch (e) {
    throw e;
  }
};
