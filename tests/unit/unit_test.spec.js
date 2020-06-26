const assert = require("assert").strict;
const codechallenge = require("../../codechallenge");
describe("testCasesByJest()", () => {
  it("SORT - should return array in sort of odd first and even next", () => {
    expect(codechallenge.sortNumbers([1, 4, 3, 2, 5, 7, 6, 8])).toEqual([
      1,
      3,
      5,
      7,
      2,
      4,
      6,
      8,
    ]);
  });

  it("SORT - should return array in sort even with negative numbers", () => {
    expect(codechallenge.sortNumbers([1, -4, 3, 0, -5, 7, 6, 8])).toEqual([
      -5,
      1,
      3,
      7,
      -4,
      0,
      6,
      8,
    ]);
  });

  it("SORT - should return error with null values", () => {
    expect(codechallenge.sortNumbers([1, null, 3, 0, -5, 7, 6, 8])).toEqual(
      "Input is not valid , Please provide valid input"
    );
  });

  it("SORT - should return error if array has undefined values", () => {
    expect(
      codechallenge.sortNumbers([1, undefined, 3, 0, -5, 7, 6, 8])
    ).toEqual("Input is not valid , Please provide valid input");
  });

  it("PERMUTATION - should return permutation values which contain characters", () => {
    expect(codechallenge.findPermutation(["c", "a", "t"])).toEqual([
      ["c", "a", "t"],
      ["a", "c", "t"],
      ["t", "c", "a"],
      ["c", "t", "a"],
      ["a", "t", "c"],
      ["t", "a", "c"],
    ]);
  });

  // Test permutation cases

  it("PERMUTATION - should return permutation values which contain duplicates", () => {
    expect(codechallenge.findPermutation([1, 2, 1])).toEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 2],
    ]);
  });

  it("PERMUTATION - should return permutation values which contain no duplicates", () => {
    expect(codechallenge.findPermutation([1, 2, 3])).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1],
    ]);
  });

  it("PERMUTATION - test the array which contain undefined as value", () => {
    expect(codechallenge.findPermutation([1, null, 3])).toEqual(
      ["Input is not valid , Please provide valid input"]
    );
  });

  it("PERMUTATION - test the array which contain null as value", () => {
    expect(codechallenge.findPermutation([1, undefined, 3])).toEqual(
     ["Input is not valid , Please provide valid input"]
    );
  });
});
