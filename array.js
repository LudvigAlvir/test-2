export function largestNumber(arr) {
  let start = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > start) {
      start = arr[i];
    }
  }
  return start;
}

const results = largestNumber([2, 5, 3, 1]);

export function largestSum(arr, n) {
  const sorted = arr.sort((a, b) => b - a);
  let out = 0;
  for (let i = 0; i < n; i++) {
    out += sorted[i];
  }
  return out;
}
