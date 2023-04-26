function randomPivotQuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = [];
  const equal = [];
  const right = [];
  for (let num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      right.push(num);
    }
  }
  return randomPivotQuickSort(left).concat(equal, randomPivotQuickSort(right));
}

export default randomPivotQuickSort;

