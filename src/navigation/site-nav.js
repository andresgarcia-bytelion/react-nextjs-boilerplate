import React from 'react'
import { NavLink } from 'react-router-dom';
import './site-nav.scss'

function SiteNav() {
	return (
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
	)
}

export default SiteNav