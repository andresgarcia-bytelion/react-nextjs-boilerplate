import React from 'react'
import { NavLink } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import './site-nav.scss'

function SiteNav() {
	const mobileNavOpen = useStoreState(state => state.mobileNav.open);

	return (
		<div className={'site_nav_wrapper' + (mobileNavOpen ? ' site_nav_wrapper_open' : '')}>
			<nav className="site_nav">
				<ul className="site_nav_list">
					<li className="site_nav_item">
						<NavLink
							className="site_nav_link"
							activeClassName="site_nav_link_active"
							to="/">Home</NavLink>
					</li>
					<li className="site_nav_item">
						<NavLink
							className="site_nav_link"
							activeClassName="site_nav_link_active"
							to="/components">Components</NavLink>
					</li>
					<li className="site_nav_item">
						<NavLink
							className="site_nav_link"
							activeClassName="site_nav_link_active"
							to="/requests">Requests</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default SiteNav