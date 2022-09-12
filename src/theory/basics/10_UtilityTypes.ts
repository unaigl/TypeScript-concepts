// ** First value is always --> the type || key (only in Record) || type from we will select/create new type

// Await < Type >
// Partial < Type >
// Required  < Type >
// Readonly  < Type >
// Record  < Keys from Type values, Type >
// Omit  < Type, key from Type >
// Pick  < Type, key from Type >
// Exclude  < Union Type, Excluded Members >
// Extract  < Type, Union >
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>
// ThisParameterType<Type>
// OmitThisParameter<Type>
// ThisType<Type>
//
// Intrinsic String Manipulation Types
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>

// Await < Type >
type B = Awaited<Promise<Promise<number>>>;
// type B = number

// Record  < Keys from Type values, Type >
interface CatInfo {
	age: number;
	breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';
type Cats = Record<CatName, CatInfo>;

const cats: Cats = {
	miffy: { age: 10, breed: 'Persian' },
	boris: { age: 5, breed: 'Maine Coon' },
	mordred: { age: 16, breed: 'British Shorthair' },
};

console.log(cats);

// Pick  < Type, key from Type >
interface Todo {
	title: string;
	description: string;
	completed: false;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
};

console.log(todo);
