export class Course {
	nombre: string;
	creditos: number;
	profesor: string;

	constructor(nombre: string, profesor: string, creditos: number) {
		this.nombre = nombre;
		this.creditos = creditos;
		this.profesor = profesor;
	}
}
