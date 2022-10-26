export const getData = async (url: string) => {
	try {
		const response = await fetch(url);
		const data = await response.json();

		// Validar errores
		if (data.error) {
			throw new Error(data.error);
		}

		return data;
	} catch (error) {
		console.error(error);
	}
};
