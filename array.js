export function largestNumber(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) biggest = arr[i];
  }
  return biggest;
}

export function largestSum(arr, n) {
  if (arr.length < n) return;
  arr.sort((a, b) => b - a);
  let out = 0;
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
    out += arr[i];
  }
  return out;
}