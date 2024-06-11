import { describe, expect, it } from "vitest";
import { twoSum } from "./index";

describe("twoSum", () => {
  it("should return empty array when couldn't find any match", () => {
    expect(twoSum([1, 2, 3], 9)).toEqual([]);
  });
  it("should return correct indexes with positive", () => {
    expect(twoSum([11, 17, 4, 25], 21)).toEqual([1, 2]);
  });
  it("should return correct indexes with negative number", () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });
  it("should handle multiple solutions, returning the first match", () => {
    expect(twoSum([1, 2, 3, 4, 3], 6)).toEqual([1, 3]);
  });
  it("should return empty array when there is only one number", () => {
    expect(twoSum([3, 5, 9], 9)).toEqual([]);
  });
  it("should handle case where all numbers are negative", () => {
    expect(twoSum([-1, -3, -2, -4], -3)).toEqual([0, 2]);
  });
});
