import { describe, expect, it } from "vitest";
import { appStatus } from "./health";

describe("appStatus", () => {
  it("reports ok status", () => {
    expect(appStatus().status).toBe("ok");
  });

  it("returns a version string", () => {
    expect(typeof appStatus().version).toBe("string");
  });
});
