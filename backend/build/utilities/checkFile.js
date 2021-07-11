"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFileOutput = exports.checkFileInput = void 0;
var fs_1 = __importDefault(require("fs"));
var config_1 = __importDefault(require("../config"));
function checkFileInput(image) {
    try {
        fs_1.default.accessSync(config_1.default.ASSETS_FOLDER + "/full/" + image + ".jpg");
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.checkFileInput = checkFileInput;
function checkFileOutput(image, width, height) {
    try {
        fs_1.default.accessSync(config_1.default.ASSETS_FOLDER + "/thumbnail/" + image + "(" + (width ? "w:" + width : "") + (height ? "h:" + height : "") + ").jpg");
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.checkFileOutput = checkFileOutput;
