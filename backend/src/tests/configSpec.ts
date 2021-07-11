import config from "../config";

describe("Config Parameter testing", () => {
  it("Assets folder have to be existed", async () => {
    expect(config.ASSETS_FOLDER).toBeDefined();
  });
  it("Port have to be specified", async () => {
    expect(config.PORT).toBeDefined();
  });
});
