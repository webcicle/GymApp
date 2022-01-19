import get from './utils/getElement.js';
import { setTopPadding } from './utils/setTopPadding.js';
import { alert } from './utils/alert.js';
import { setupHeaderIcons, setupFooter } from './utils/setupMenu.js';
import {
	getStorageItem,
	setStorageItem,
	removeStorageItem,
} from './utils/manageStorage.js';
import { dateCountdown } from './utils/countdown.js';
import { init } from './createWorkout.js';

const QUOTE_URL = 'https://zenquotes.io/api/today';
const ROUTINES = getStorageItem('routines');

const headerBtns = [...document.querySelectorAll('[data-headerBtn]')];
const footerBtns = [...document.querySelectorAll('[data-footerMenuBtn]')];
const routineModal = get('[data-routineModalOpen]');
const routinesList = get('[data-routinesList]');

window.addEventListener('DOMContentLoaded', () => {
	setupFooter();
	setupHeaderIcons();
	setupRoutines();
});

function setupRoutines() {
	routinesList.innerHTML = ROUTINES.map(
		({ name, goal, daysOfWeek, renewal, id }) => {
			return `<li class="link-item flex space-between routine-item">
						<div class="routine-item-info">
							<p class="routine-item-goal">${goal}</p>
							<button id="${id}" class="routine-item-title">${name}</button data-routineEditButton>
							<p class="routine-item-day">${daysOfWeek.join(', ')}</p>
						</div>
						${dateCountdown(renewal)}
					</li>`;
		}
	).join('');
	const routineEditButtons = document.querySelectorAll(
		'[data-routineEditButton]'
	);
	routineEditButtons.forEach((btn) =>
		btn.addEventListener('click', editRoutine)
	);
}

async function editRoutine(e) {
	e.preventDefault();
	const btnID = e.target.id;
	const exercise = ROUTINES.find((routine) => routine.id === btnID);
	console.log(exercise);
	// await window.location('creatWorkout.html');
	// await init(exercise);
}
