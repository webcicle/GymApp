const fetchData = async (URL) => {
	try {
		const response = await fetch(URL);

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export { fetchData };
