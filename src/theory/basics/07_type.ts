// type // for primitives and unions
type user = {
	name: string;
	age?: number;
	role: string;
};

type admin = {
	name: string;
	age?: number;
	role: string;
};

const teacher: user | admin = {
	name: 'Steve',
	role: 'admin',
};
