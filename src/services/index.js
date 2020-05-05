const api = 'https://private-6fb040-woodworking.apiary-mock.com/'

export const basicFetch = async path => {
	const response = await fetch(api + path)
	const data = await response.json()

	return data
}