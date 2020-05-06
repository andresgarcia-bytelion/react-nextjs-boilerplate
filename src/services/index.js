import { useState, useEffect } from 'react'

function basicFetch(path) {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const api = 'https://private-6fb040-woodworking.apiary-mock.com/'
			const response = await fetch(api + path)
			const data = await response.json()

			setData(data)
		}

		fetchData();
	}, [])

	return { data }
}

export default basicFetch