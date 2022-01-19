import get from '../utils/getElement.js';
import { setupExerciseModal } from '../exercises/setupExercises.js';

const exerciseList = get('[data-exerciseList]');
const exerciseSearch = get('[data-exerciseSearch]');

const setupSearchFilter = (exercises) => {
	exerciseSearch.addEventListener('keyup', (e) => {
		console.log(exercises);
		let filteredExercises;
		if (e.target.value) {
			console.log(e.target.value);
			filteredExercises = exercises.filter((exercise) => {
				if (exercise.name.startsWith(e.target.value)) {
					return exercise;
				}
			});
		} else {
			setupExerciseModal(exercises);
		}
		console.log(filteredExercises);
		setupExerciseModal(filteredExercises);
	});
};

export { setupSearchFilter };
