import get from './getElement.js';

const alertElem = get('[data-alertOpen]');
const alertMsg = get('[data-alertMsg]');

export const alert = (message, color, duration) => {
	if (alertElem.dataset.alertopen === 'false') {
		alertElem.setAttribute('data-alertOpen', 'true');

		alertElem.style.setProperty(
			'--bg-color',
			`var(--accent-clr-${color})`,
			'!important'
		);
		alertMsg.textContent = message;

		setTimeout(() => {
			alertElem.setAttribute('data-alertOpen', 'false');
		}, duration);
	} else return;
};
