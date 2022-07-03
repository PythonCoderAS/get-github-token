import { expect } from "chai";
import getToken from "../src";

const starterEnvVars = process.env;

describe("get-github-token tests", () => {
  beforeEach("reset environment variables", () => {
    process.env = starterEnvVars;
  });

  it("should find token from environment variable", () => {
    process.env["GITHUB_TOKEN"] = "token";
    expect(getToken()).to.equal("token");
  });

  it("should find token from environment variable and explicitly nullish param", () => {
    process.env["GITHUB_TOKEN"] = "token";
    expect(getToken(undefined)).to.equal("token");
    expect(getToken(null)).to.equal("token");
  });

  it("should find token from environment variable and alternate name", () => {
    process.env["TEST_TOKEN"] = "token";
    expect(getToken(undefined, "TEST_TOKEN")).to.equal("token");
    expect(getToken(null, "TEST_TOKEN")).to.equal("token");
  });

  it("should find token from command line argument", () => {
    expect(getToken("token")).to.equal("token");
  });

  it("should find token from command line argument and alternate name", () => {
    expect(getToken("token", "TEST_TOKEN")).to.equal("token");
  });

  it("should find token from command line argument even with conflicting environment variable", () => {
    process.env["GITHUB_TOKEN"] = "token2";
    expect(getToken("token")).to.equal("token");
  });

  it("should find token from command line argument even with conflicting environment variable and alternate name", () => {
    process.env["TEST_TOKEN"] = "token2";
    expect(getToken("token", "TEST_TOKEN")).to.equal("token");
  });
});
