import get from './getElement.js';

const setTopPadding = () => {
	const headerHeight = Math.ceil(get('.header').getBoundingClientRect().height);
	const mainContent = get('.main-window');
	mainContent.style.setProperty('--padding', `${headerHeight + 8}px`);
};

export { setTopPadding };
