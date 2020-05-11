import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import './mobile-nav-button.scss'

function MobileNavButton() {
	const mobileNavOpen = useStoreState(state => state.mobileNav.open)
	const toggleMobileNav = useStoreActions(actions => actions.mobileNav.toggle);

	useEffect(() => {
		document.body.addEventListener('click', bodyClick)

		return () => document.body.removeEventListener('click', bodyClick);
	}, [mobileNavOpen])

	function bodyClick(e) {
		const button = document.querySelector('.mobile_nav_button')
		const menu = document.querySelector('.site_nav_wrapper')
		const target = e.target

		if (mobileNavOpen) {
			if (button != target && !button.contains(target)) {
				if (menu != target && !menu.contains(target)) {
					toggleMobileNav(mobileNavOpen)
				}
			}
		}
	}

	return (
		<button className="mobile_nav_button" onClick={() => toggleMobileNav(mobileNavOpen)}>
			<span className="mobile_nav_button_icon"></span>
			<span className="mobile_nav_button_label">Menu</span>
		</button>
	)
}

export default MobileNavButton