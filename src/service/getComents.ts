export const getComents = async () => {
	const url = `https://jsonplaceholder.typicode.com/comments`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		// Validar si hay un error
		if (response.status !== 200) {
			throw new Error(data.message);
		}

		return data;
	} catch (error) {
		console.error(error);
	}
};
