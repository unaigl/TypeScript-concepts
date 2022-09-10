// Interfaces // unions, optional property, readonly property, Function Interfaces
interface UserInterface {
	readonly id: number;
	name: string;
	age?: number;
}

const user: UserInterface = {
	id: 1,
	name: 'John',
};

// Function Interfaces
interface MathFunc {
	(x: number, y: number): number | void;
}

const add: MathFunc = (x: number, y: number): void => {
	x + y;
}; // returnn undefined due to {}
const sub: MathFunc = (x: number, y: number): number => x - y; // returns a number

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}
console.log(add(3, 4));
