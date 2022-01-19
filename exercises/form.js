import get from '../utils/getElement.js';
import { exerciseModalButtons } from '../utils/setupMenu.js';
import { init } from '../createWorkout.js';

const exerciseModal = get('[data-exerciseModalOpen]');
const exerciseModalForm = get('[data-exerciseModalForm]');
const routinesForm = get('[data-routineInfoForm]');
const addBtn = get('[data-headerBtn="save"]');
const addExerciseBtn = get('[data-addExerciseBtn]');

const submitExerciseForm = (e) => {
	e.preventDefault();

	const formData = new FormData(exerciseModalForm);

	const data = {};
	formData.forEach((value, key) => (data[key] = value));

	let arrayData = Object.values(data);

	exerciseModal.setAttribute('data-exerciseModalOpen', 'false');
	addBtn.removeEventListener('click', submitExerciseForm);

	init(arrayData);
	// set data in "TEMP", local storage
};

function setupExerciseForm(selectedExerciseData) {
	const listItems = [
		...exerciseModalForm.querySelectorAll('[data-excListItemCheckbox]'),
	];

	if (selectedExerciseData) {
		selectedExerciseData.forEach((id) => {
			const exercise = listItems.find((item) => {
				if (item.id == id) {
					console.log(item, item.id, id);
					item.checked = true;
				} else return;
			});
		});
	} else return;
}

const submitRoutinesForm = async (e) => {
	e.preventDefault();
	const checkboxes = document.querySelectorAll('.checkbox-input');
	let days = [];
	checkboxes.forEach((box) => {
		if (box.checked) {
			days.push(box.id);
		}
	});

	const formData = new FormData(routinesForm);

	const data = {};
	formData.forEach((value, key) => (data[key] = value));

	const routineItemAmount = document.querySelectorAll(
		'[data-routineItemAmount]'
	);
	const setsRepsWeightRest = document.querySelectorAll("[type='number']");

	let setsReps = [];

	// routineItemAmount.forEach((item) => {
	// 	const id = item.id;
	// 	const input = item.querySelectorAll("[type='number']");
	// 	const repsData = {};
	// 	input.forEach((value, key) => (repsData[key] = value));
	// 	repsData.id = id;
	// 	setsReps.push(repsData);
	// 	console.log(repsData);
	// 	console.log(setsReps);
	// });

	// extract an object with the setsRepsW and then it needs to go into the

	data.daysOfWeek = days;

	return data;
};

const validateForm = async (newExercises) => {
	if (newExercises.length < 0) {
		alert('Please select at least one exercise for your routine', 'red', 2000);
	}
};

export {
	submitExerciseForm,
	setupExerciseForm,
	submitRoutinesForm,
	validateForm,
};
