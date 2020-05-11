import React from 'react'
import { useStoreState } from 'easy-peasy';
import Nav from './nav'
import './site-nav.scss'

function SiteNav() {
	const mobileNavOpen = useStoreState(state => state.mobileNav.open);

	return (
		<div className={'site_nav_wrapper' + (mobileNavOpen ? ' site_nav_wrapper_open' : '')}>
			<Nav
				title="Menu"
				class="site_nav"
				items={[
					{
						to: '/',
						exact: true,
						icon: '',
						label: 'Home'
					},
					{
						to: '/components',
						icon: '',
						label: 'Components'
					},
					{
						to: '/requests',
						icon: '',
						label: 'Requests'
					}
				]}
			/>
		</div>
	)
}

export default SiteNav