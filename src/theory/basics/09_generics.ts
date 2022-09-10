// Generics
function getArray<T>(items: T[]): T[] {
	return [].concat(items);
}

const numArray = getArray<number>([1, 2, 3, 4]);
const strArray = getArray<string>(['brad', 'John', 'Jill']);

// strArray.push(1) // Throws error
// numArray.push('Steve') // Throws error
