import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById(
	'button-filterByName'
)!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement>(
	document.getElementById('search-box')!
);
const totalCreditElm: HTMLElement = document.getElementById('total-credits')!;

btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(dataCourses);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`;

function renderCoursesInTable(courses: Course[]): void {
	console.log('Desplegando cursos');
	courses.forEach((course) => {
		let trElement = document.createElement('tr');
		trElement.innerHTML = `<td>${course.nombre}</td>
                           <td>${course.profesor}</td>
                           <td>${course.creditos}</td>`;
		coursesTbody.appendChild(trElement);
	});
}

function applyFilterByName() {
	let text = inputSearchBox.value;
	text = text == null ? '' : text;
	clearCoursesInTable();
	let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
	renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
	return nameKey === ''
		? dataCourses
		: courses.filter((c) => c.nombre.match(nameKey));
}

function getTotalCredits(courses: Course[]): number {
	let totalCredits: number = 0;
	courses.forEach((course) => (totalCredits = totalCredits + course.creditos));
	return totalCredits;
}

function clearCoursesInTable() {
	while (coursesTbody.hasChildNodes()) {
		if (coursesTbody.firstChild != null) {
			coursesTbody.removeChild(coursesTbody.firstChild);
		}
	}
}
