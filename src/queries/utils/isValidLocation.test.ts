/*eslint-disable */
import { isValidLocation } from "./isValidLocation";

describe("isValidLocation", () => {
  it("should true for alphabet location", () => {
    expect(isValidLocation("manchester")).toEqual(true);
  });
  it("should true for alphabet location with a space", () => {
    expect(isValidLocation("manchester airport")).toEqual(true);
  });
  it("should return true for alphanumeric location", () => {
    expect(isValidLocation("12st")).toEqual(true);
  });

  it("should return false for non-alphanumeric location", () => {
    expect(isValidLocation("%$^")).toEqual(false);
  });

  it("should return false for empty location", () => {
    expect(isValidLocation()).toEqual(false);
  });
});
