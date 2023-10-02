import request from "supertest";
import { app } from "..";

describe("GET /up", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/up")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual("All Systems Up");
  });
});
