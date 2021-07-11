"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkFile_1 = require("../../utilities/checkFile");
describe("File existing testing", function () {
    it("Testing input file of non existing", function () {
        expect(checkFile_1.checkFileInput("nofile.jpg")).toBeFalse();
    });
    it("Testing input file of existing", function () {
        expect(checkFile_1.checkFileInput("fjord")).toBeTrue();
    });
    it("Testing output file of non existing", function () {
        expect(checkFile_1.checkFileOutput("fjord_nonexist", 200, 200)).toBeFalse();
    });
    it("Testing output file of existing", function () {
        expect(checkFile_1.checkFileOutput("fjord", 200, 200)).toBeTrue();
    });
});
