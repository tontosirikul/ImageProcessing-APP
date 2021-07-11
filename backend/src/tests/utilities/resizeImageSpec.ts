import { resizeImage } from "../../utilities/resizeImage";

describe("image resize function testing", () => {
  it("Existed input image to be done", async () => {
    await expectAsync(resizeImage("fjord", 200, 200)).toBeResolved();
  });

  it("Non existed input image to be rejected", async () => {
    await expectAsync(resizeImage("fjira", 200, 200)).toBeRejected();
  });
});
