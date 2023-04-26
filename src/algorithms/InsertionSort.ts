function insertionSort(array: number[]): number[] {
  const arrayLength = array.length;
  
  for (let i = 1; i < arrayLength; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

export default insertionSort;