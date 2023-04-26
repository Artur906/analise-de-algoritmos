function dualPivotQuickSort(arr: number[]): void {
  dualPivotQuickSortRecursive(arr, 0, arr.length - 1);
}

function dualPivotQuickSortRecursive(arr: number[], left: number, right: number): void {
  if (left < right) {
    if (arr[left] > arr[right]) {
      swap(arr, left, right);
    }
    let p = arr[left];
    let q = arr[right];
    let i = left + 1;
    let k = i;
    let j = right - 1;
    while (k <= j) {
      if (arr[k] < p) {
        swap(arr, i++, k++);
      } else if (arr[k] >= q) {
        while (arr[j] > q && k < j) {
          j--;
        }
        swap(arr, k, j--);
        if (arr[k] < p) {
          swap(arr, i++, k);
        }
      }
      k++;
    }
    i--;
    j++;
    swap(arr, left, i);
    swap(arr, right, j);
    dualPivotQuickSortRecursive(arr, left, i - 1);
    if (p < q) {
      dualPivotQuickSortRecursive(arr, i + 1, j - 1);
    }
    dualPivotQuickSortRecursive(arr, j + 1, right);
  }
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default dualPivotQuickSort;