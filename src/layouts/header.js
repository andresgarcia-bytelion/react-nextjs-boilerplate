import React from 'react'
import { useStoreState } from 'easy-peasy';
import SiteNav from '../navigation/site-nav'
import './header.scss'

function Header() {
	const loggedIn = useStoreState(state => state.loginStatus.loggedIn);

	console.log(loggedIn);

	return (
		<header className="header">
			<h1>Header</h1>
			<SiteNav />
		</header>
	)
}

export default Header