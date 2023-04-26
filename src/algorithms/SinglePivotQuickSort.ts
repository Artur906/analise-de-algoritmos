function SinglePivotQuickSort(arr: number[]): void {
  SinglePivotQuickSortRecursive(arr, 0, arr.length - 1);
}

function SinglePivotQuickSortRecursive(arr: number[], left: number, right: number): void {
  if (left < right) {
    const pivotIndex = SinglePivotpartition(arr, left, right);
    SinglePivotQuickSortRecursive(arr, left, pivotIndex - 1);
    SinglePivotQuickSortRecursive(arr, pivotIndex + 1, right);
  }
}

function SinglePivotpartition(arr: number[], left: number, right: number): number {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default SinglePivotQuickSort;