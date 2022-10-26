export const getPost = async () => {
	const url = `https://jsonplaceholder.typicode.com/posts`;

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
