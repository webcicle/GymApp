import get from '../utils/getElement.js';

const exerciseList = get('[data-exerciseList]');

function setupExerciseModal(exercises) {
	let { name, category, images, id } = exercises;
	let imgThumbnail = images;

	const exerciseItems = exercises
		.map(({ name, category, imgThumbnail, id }) => {
			return `<li class="link-item exercise-list-item" data-excListItem id="${id}">
							<i class="fas fa-dumbbell exercise-list-item-icon"></i>
						<div class="routine-item-info exercise-list-item-info">
							<h2 class="routine-item-title exercise-list-item-title">${name}</h2>
							<p class="routine-item-goal exercise-list-item-category">${category}</p>
						</div>
						<label for="${id}" class="aria-nonVisible">${name}</label>
						<input type="checkbox" class="exercise-list-item-checkbox css-checkbox dark-check-green" data-excListItemCheckbox name="${name}" id="${id}" value="${id}">
					</li>`;
		})
		.join('');
	exerciseList.innerHTML = exerciseItems;
}

export { setupExerciseModal };

// exercises.forEach((categories) => {
// 	console.log(categories);
// });
