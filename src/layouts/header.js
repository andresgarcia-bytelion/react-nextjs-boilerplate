import React from 'react'
import Logo from '../components/logo'
import MobileNavButton from '../components/mobile-nav-button'
import SiteNav from '../navigation/site-nav'
import './header.scss'

function Header() {
	return (
		<header className="header">
			<div className="header_inner">
				<Logo />
				<MobileNavButton />
				<SiteNav />
			</div>
		</header>
	)
}

export default Header