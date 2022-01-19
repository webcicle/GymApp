function getStorageItem(name) {
	let locStorage = localStorage.getItem(name);
	if (locStorage) {
		locStorage = JSON.parse(localStorage.getItem(name));
	} else {
		locStorage = [];
	}
	return locStorage;
}

function setStorageItem(name, data) {
	localStorage.setItem(name, JSON.stringify(data));
}

function removeStorageItem(name) {
	localStorage.removeItem(name);
}

export { getStorageItem, setStorageItem, removeStorageItem };
