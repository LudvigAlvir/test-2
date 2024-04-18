import { largestNumber, largestSum } from "./array";

test("largesNumber function is defined", () => {
	expect(largestNumber).toBeDefined();
});

test("largestNumber [1, 2, 3, 4, 5]", () => {
	expect(largestNumber([1, 2, 3, 4, 5])).toBe(5);
});
test("largestNumber [5, 4, 3, 2, 1]", () => {
	expect(largestNumber([5, 4, 3, 2, 1])).toBe(5);
});
test("largestNumber [5, 3, 2, 6, 5]", () => {
	expect(largestNumber([5, 3, 2, 6, 5])).toBe(6);
});
test("largestNumber [3,3,3,3,3,3]", () => {
	expect(largestNumber([3, 3, 3, 3, 3, 3])).toBe(3);
});
test("largestNumber [9]", () => {
	expect(largestNumber([9])).toBe(9);
});

test("largestSum function is defined", () => {
	expect(largestSum).toBeDefined();
});
test("largestSum ([2, 5, 3, 1], 2)", () => {
	expect(largestSum([2, 5, 3, 1], 2)).toBe(8);
});
test("largestSum ([2, 5, 3, 1, 7], 3)", () => {
	expect(largestSum([2, 5, 3, 1, 7], 3)).toBe(15);
});
test("largestSum ([3, 3, 3, 3, 3], 3)", () => {
	expect(largestSum([3, 3, 3, 3, 3], 3)).toBe(9);
});
test("largestSum ([9], 1)", () => {
	expect(largestSum([9], 1)).toBe(9);
});
test("largestSum ([1,2,3,4,5,5], 1)", () => {
	expect(largestSum([1, 2, 3, 4, 5, 5], 1)).toBe(5);
});
