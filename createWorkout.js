import get from './utils/getElement.js';
import { setTopPadding } from './utils/setTopPadding.js';
import { setupExerciseModal } from './exercises/setupExercises.js';
import {
	setupHeaderText,
	setupFooter,
	exerciseModalButtons,
} from './utils/setupMenu.js';
import { fetchData } from './utils/fetchData.js';
import {
	submitExerciseForm,
	setupExerciseForm,
	submitRoutinesForm,
	validateForm,
} from './exercises/form.js';
import { alert } from './utils/alert.js';
import {
	getStorageItem,
	setStorageItem,
	removeStorageItem,
} from './utils/manageStorage.js';
import { setupSearchFilter } from './filters/search.js';
import {
	setupExerciseValues,
	setupInputValues,
} from './exercises/setupExerciseValues.js';

export { init };

const URL = './data/exercises.json';

window.addEventListener('DOMContentLoaded', () => {
	init();
});

const headerBtns = [...document.querySelectorAll('[data-headerBtn]')];
const addExerciseBtn = get('[data-addExerciseBtn]');
const exerciseModal = get('[data-exerciseModalOpen]');
const exerciseModalForm = get('[data-exerciseModalForm]');
const exerciseListRoutines = get('[data-exerciseListRoutines]');

let routinesStorage = getStorageItem('routines');
let newExercises = [];

const init = async (selectedExerciseData) => {
	const data = await fetchData(URL);
	setupFooter();
	setupHeaderText();
	addExerciseBtn.addEventListener('click', (e) => {
		e.preventDefault();
		exerciseModal.setAttribute('data-exerciseModalOpen', 'true');
		setupExerciseModal(data);
		setupHeaderText();
		const addBtn = get('[data-headerBtn="add"]');
		setupExerciseForm(selectedExerciseData);
		setupSearchFilter(data);
		addBtn.addEventListener('click', submitExerciseForm, { useCapture: true });
	});

	const routineInfoForm = document.querySelector('[data-routineInfoForm]');

	const saveBtn = get('[data-headerBtn="save"]');

	if (selectedExerciseData) {
		newExercises = [];
		selectedExerciseData.forEach((id) => {
			const exercise = data.find((item) => item.id === id);

			newExercises.push(exercise);
		});
		console.log(newExercises);
		exerciseListRoutines.innerHTML = newExercises
			.map(
				({
					name,
					id,
					category,
					defaultSets,
					defaultReps,
					defaultWeight,
					defaultRest,
				}) => {
					return `<li
							class="
								link-item
								center
								flex
								space-between
								routine-item routine-exercise-item
							" id="${id}"
						>
							<div class="routine-item-info flex space-between">
								<button class="remove-exercise-btn">
									<i class="fas fa-minus-circle"></i>
								</button>
								<div>
									<h2 class="routine-item-title">${name}</h2>
									<div class="routine-item-day routine-item-amount" data-routineItemAmount>
										<input id="${id}" type="number" name="defaultSets" min="1" max"10" value="${defaultSets}" data-exerciseAmount="sets"></input> sets,
										<input id="${id}" type="number" name="defaultReps" min="1" max"99" value="${defaultReps}" data-exerciseAmount="reps"></input> reps,
										<input id="${id}" type="number" name="defaultWeight" min="10" max"99" value="${defaultWeight}" data-exerciseAmount="weight"></input> kg,
										<input id="${id}" type="number" name="defaultRest" min="1" max"500" value="${defaultRest}" data-exerciseAmount="rest"></input> sec (rest)
									</div>
								</div>
							</div>
       <div>
        <button id="${id}" data-optionsBtn class="options-btn">
         <i class="fas fa-sliders-h"></i>
        </button>
        <button id="${id}" data-addSetBtn class="options-btn">
         <i class="fas fa-plus"></i>
        </button>
       </div>
						</li>`;
				}
			)
			.join('');
		setupExerciseValues(newExercises);
		saveBtn.addEventListener('click', submitForm);
	}
};

async function submitForm(e) {
	e.preventDefault();
	// await validateForm(newExercises);
	let routineObject = await submitRoutinesForm(e);
	routineObject.exercises = await setupInputValues(newExercises);
	routinesStorage.push(routineObject);
	console.log(routineObject);
	setStorageItem('routines', routinesStorage);
	// routineInfoForm.removeEventListener('submit', async (e) => submitForm);
	window.location = './routines.html';
}
