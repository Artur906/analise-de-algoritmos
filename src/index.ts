import algorithms from './algorithms';
import arrays, { isSorted } from './arrays';

type algorithmResults = {
	algorithmName: string;
	arrayType: string;
	arraySize: string;
	mediumTime: number;
};

const results: algorithmResults[] = [];

Object.entries(algorithms).forEach((values) => {
	const algorithmName = values[0];
	const sort = values[1];

	console.log('algorithm beeing tested:', algorithmName);

	Object.entries(arrays).forEach((arrayTypesValues) => {
		const arrayTypeName = arrayTypesValues[0];
		const arrayTypeObject = arrayTypesValues[1];

		console.log('array type:', arrayTypeName);

		Object.entries(arrayTypeObject).forEach((arraySizeValue) => {
			const arraySizeName = arraySizeValue[0];
			const arrayValue = arraySizeValue[1];
			const timeResults: number[] = new Array(50);

			if (
				(arrayTypeName === 'growing' || arrayTypeName === 'descending') &&
				(algorithmName.includes('singlePivot') || algorithmName.includes('dualPivot'))
			) {
				const finalResult: algorithmResults = {
					algorithmName: algorithmName,
					arrayType: arrayTypeName,
					arraySize: arraySizeName,
					mediumTime: -1,
				};
				results.push(finalResult);
			} else {
				for (let i = 0; i < 50; i++) {
					const arrayCopy = [...arrayValue];

					const initialTime = performance.now();
					const sortedArray = sort(arrayCopy);
					const endTime = performance.now() - initialTime;

					const arrayToAnalyze = sortedArray ?? arrayCopy; // sometimes the sort function doesn't return an array
					isSorted(arrayToAnalyze) ?? console.error('The array is not sorted');
					timeResults.push(endTime);
				}

				const finalResult: algorithmResults = {
					algorithmName: algorithmName,
					arrayType: arrayTypeName,
					arraySize: arraySizeName,
					mediumTime:
						timeResults.reduce((previous, current) => previous + current, 0) /
						50,
				};

				results.push(finalResult);
				console.log(arraySizeName + ':', finalResult.mediumTime);
			}
		});
	});
});

console.table(JSON.parse(JSON.stringify(results)));

