import supertest from "supertest";
import app from "../..";

const request = supertest(app);

describe("Endpoint responses testing (api)", () => {
  it("api endpoint should be fine", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    expect(response.text).toBe("main api");
  });
});
