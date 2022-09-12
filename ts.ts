//
// Composing Types
//
type animal = 'locked' | 'unlocked';

const cat: animal = 'locked';
/* 
console.log(cat);
console.log(typeof cat === 'string'); // true
 */

//
// To learn the type of a variable, use typeof:
//

function wrapInArray(obj: string | string[]) {
	if (typeof obj === 'string') {
		return 'is a string';
	}
	if (Array.isArray(obj)) {
		return 'is a string[]';
	}
}
const a = wrapInArray('a');
const b = wrapInArray(['a', 'v']);
/* 
console.log(a); // is a string
console.log(b); // is a string[]
 */
