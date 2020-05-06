import React from 'react'
import basicFetch from '../services'

function Home() {
	const {data} = basicFetch('joints');

	return (
		<React.Fragment>
			<h1>Requests</h1>
			{JSON.stringify(data)}
		</React.Fragment>
	)
}

export default Home