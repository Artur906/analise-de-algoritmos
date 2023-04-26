function countingSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  const counts = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
  }

  // Modify the counts array to contain the number of elements less than or equal to the current element
  for (let i = 1; i <= max; i++) {
    counts[i] += counts[i - 1];
  }

  // Build the sorted array
  const result = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    result[counts[arr[i]] - 1] = arr[i];
    counts[arr[i]]--;
  }

  return result;
}

export default countingSort;