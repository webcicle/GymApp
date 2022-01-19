import get from '../utils/getElement.js';
import { alert } from '../utils/alert.js';

const setupExerciseValues = (exercises) => {
	setupInputValues(exercises);

	const optionsBtns = document.querySelectorAll('[data-optionsBtn]');
	const addSetBtns = document.querySelectorAll('[data-addSetBtn]');

	console.log(optionsBtns);

	optionsBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			setupInputValues(exercises);
			e.target.style.color = 'var(--accent-clr-green)';

			// e.target.classList.add('active');

			let target = e.target.parentElement.parentElement.parentElement;
			target = target.children[0];
			target = target.children[1];
			target = target.children[1];

			const inputs = target.querySelectorAll('[data-exerciseAmount]');
			inputs.forEach((input) => {
				input.readOnly = false;
			});

			// saveExerciseBtn.addEventListener('click');
		});
	});

	// addSetBtns.forEach((btn) => {
	// 	btn.addEventListener('click', (e) => {
	// 		e.preventDefault();
	// 		setupInputValues(exercises);
	// 		alert('Feature coming soon', 'green', 3000);
	// 	});
	// });
};

const setupInputValues = async (exercises) => {
	let updatedValues;
	const listItemInputs = document.querySelectorAll("[type='number']");
	const optionsBtns = document.querySelectorAll('[data-optionsBtn]');

	listItemInputs.forEach((input) => {
		input.readOnly = true;
		updatedValues = updateValues(input, exercises);
		console.log();
	});

	optionsBtns.forEach((btn) => {
		btn.children[0].style.color = 'var(--text-clr--accent)';
	});

	return updatedValues;
};

const updateValues = (input, exercises, key) => {
	let data = exercises.find((exc) => input.id === exc.id);
	console.log(data);
	console.log(data[key]);
	data[input.name] = JSON.parse(input.value);
	return exercises;
};

export { setupExerciseValues, setupInputValues };
