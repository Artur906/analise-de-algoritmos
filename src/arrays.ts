const LARGE_ARRAY_LENGTH = 15000;
const SMALL_ARRAY_LENGTH = LARGE_ARRAY_LENGTH / 3; // 1/3 of the size of the default array
const MID_ARRAY_LENGTH = SMALL_ARRAY_LENGTH * 2; // 2/3 of the size of the default array


export const isSorted = (array: number[]): boolean => {
	const length = array.length;

	for (let i = 1; i < length; i++) {
		if (array[i] <= array[i - 1]) return false;
	}

	return true;
};


const generateArray = (length: number) : number[] => {
  const array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = i + 1;
  }
  return array;
}

const randomizeArray = (array: number[]) : number[] => {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    const newPosition = Math.floor(Math.random() * length);
    [array[i], array[newPosition]] = [array[newPosition], array[i]];
  }

  return array;
}


const baseArray = generateArray(LARGE_ARRAY_LENGTH);
const randomArray = randomizeArray([...baseArray]);

const arrays = {
  growing: {
    small: [...baseArray].splice(0, SMALL_ARRAY_LENGTH),
    mid: [...baseArray].splice(0, MID_ARRAY_LENGTH),
    large: [...baseArray]
  }, 
  descending: {
    small: [...baseArray].splice(0, SMALL_ARRAY_LENGTH).reverse(), 
    mid: [...baseArray].splice(0, MID_ARRAY_LENGTH).reverse(),
    large: [...baseArray].reverse() 
  }, 
  random: {
    small: [...randomArray].splice(0, SMALL_ARRAY_LENGTH), 
    mid: [...randomArray].splice(0, MID_ARRAY_LENGTH),
    large: [...randomArray] 
  }
}

export default arrays;