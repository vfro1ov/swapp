export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}
		return await res.json();
	} catch (error) {
		console.error('	Could not fetch.', error.message);
		return false;
	}
};

// (async () => {
// 	const data = await getApiResponse(API_BASE + API_PEOPLE);
// 	console.log(data);
// })();
