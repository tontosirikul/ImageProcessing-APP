import { checkFileInput, checkFileOutput } from "../../utilities/checkFile";

describe("File existing testing", () => {
  it("Testing input file of non existing", () => {
    expect(checkFileInput("nofile.jpg")).toBeFalse();
  });
  it("Testing input file of existing", () => {
    expect(checkFileInput("fjord")).toBeTrue();
  });
  it("Testing output file of non existing", () => {
    expect(checkFileOutput("fjord_nonexist", 200, 200)).toBeFalse();
  });
  it("Testing output file of existing", () => {
    expect(checkFileOutput("fjord", 200, 200)).toBeTrue();
  });
});
