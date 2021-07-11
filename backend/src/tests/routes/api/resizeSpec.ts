import app from "../../..";
import supertest from "supertest";

const request = supertest(app);

describe("Endpoint responses testing (resize)", () => {
  it("api endpoint should be fine", async () => {
    const response = await request.get("/api/resize");
    expect(response.status).toBe(200);
  });
  it("api endpoint should be fine", async () => {
    const response = await request.get("/api/resize?image=fjord");
    expect(response.text).toBe("please specify the proper size");
  });
  it("api endpoint of non exist should be fine", async () => {
    const response = await request.get("/api/resize?image=fjordy");
    expect(response.text).toBe("No file");
  });
  it("api endpoint with minus width should be fine", async () => {
    const response = await request.get(
      "/api/resize?image=fjord&width=-100&height=200"
    );
    expect(response.text).toBe("please specify the proper size");
  });
  it("api endpoint with minus height should be fine", async () => {
    const response = await request.get(
      "/api/resize?image=fjord&width=-100&height=200"
    );
    expect(response.text).toBe("please specify the proper size");
  });
  it("api endpoint width minus width and height should be fine", async () => {
    const response = await request.get(
      "/api/resize?image=fjord&width=-100&height=-200"
    );
    expect(response.text).toBe("please specify the proper size");
  });
});
