function getElement(element) {
	try {
		return document.querySelector(element);
	} catch (error) {
		console.log(error);
	}
}

export default getElement;
