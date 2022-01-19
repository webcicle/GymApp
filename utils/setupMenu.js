import { alert } from './alert.js';
import get from './getElement.js';

const headerBtns = [...document.querySelectorAll('[data-headerBtn]')];
const addBtn = document.querySelector('[data-headerBtn="add"]');
const saveBtn = document.querySelector('[data-headerBtn="save"]');
const footerBtns = [...document.querySelectorAll('[data-footerMenuBtn]')];
const routineModal = get('[data-routineModalOpen]');
const exerciseModal = get('[data-exerciseModalOpen]');

console.log(exerciseModal);

function setupHeaderIcons() {
	headerBtns.forEach((button) => {
		button.addEventListener('click', (e) => {
			const target = e.target.parentElement;
			if (target.dataset.headerbtn == 'addRoutine') {
				routineModal.setAttribute('data-routineModalOpen', 'true');
			} else return;

			routineModal.addEventListener('click', (e) => {
				if (!e.target.classList.contains('add-routine-modal')) {
					routineModal.setAttribute('data-routineModalOpen', 'false');
				}
			});
		});
	});
}

function setupFooter() {
	footerBtns.forEach((button) => {
		button.addEventListener('click', (e) => {
			const target = e.target.parentElement.dataset.footermenubtn;
			console.log(target);
			if (target === 'routines') window.location = './index.html';
			else
				alert('This function will be available at a later time', 'green', 2000);
		});
	});
}

function setupHeaderText() {
	// headerBtns[0].textContent = btn1;
	// var = btn1, btn2, btnFunction
	// headerBtns[0].setAttribute('data-headerBtn', btn1);
	// headerBtns[1].textContent = btn2;
	// headerBtns[1].setAttribute('data-headerBtn', btn2);
	// headerBtns.forEach((btn) => {
	// 	btn.addEventListener('click', btnFunction);
	// });

	if (exerciseModal.dataset.exercisemodalopen == 'false') {
		saveBtn.classList.remove('hide');
		addBtn.classList.add('hide');
	} else {
		addBtn.classList.remove('hide');
		saveBtn.classList.add('hide');
	}
}

function exerciseModalButtons(e) {
	const target = e.target;
	if (
		target.dataset.headerbtn === 'cancel' &&
		exerciseModal.dataset.exercisemodalopen === 'false'
	) {
		window.location = './index.html';
	} else if (
		target.dataset.headerbtn === 'cancel' &&
		exerciseModal.dataset.exercisemodalopen === 'true'
	) {
		exerciseModal.setAttribute('data-exerciseModalOpen', 'false');
		setupHeaderText('cancel', 'Save', exerciseModalButtons);
	}
}

export { setupHeaderIcons, setupFooter, setupHeaderText, exerciseModalButtons };
