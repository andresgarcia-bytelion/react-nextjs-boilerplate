import React from 'react'
import MobileNavButton from '../components/mobile-nav-button'
import SiteNav from '../navigation/site-nav'
import './header.scss'

function Header() {
	return (
		<header className="header">
			<div className="header_inner">
				<h1>Header</h1>
				<MobileNavButton />
				<SiteNav />
			</div>
		</header>
	)
}

export default Header