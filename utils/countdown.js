import get from './getElement.js';

const dateCountdown = (renewalDate) => {
	if (renewalDate) {
		let renewal = new Date(renewalDate);
		const today = new Date();
		renewal = Math.ceil((renewal - today) / 1000 / 60 / 60 / 24);
		if (renewal > 0) {
			return `<div class="routine-item-countdown green"><span>-${renewal}</span> days</div>`;
		} else {
			return `<div class="routine-item-countdown red"><span>+${renewal}</span> days</div>`;
		}
	} else return '';
};

export { dateCountdown };
