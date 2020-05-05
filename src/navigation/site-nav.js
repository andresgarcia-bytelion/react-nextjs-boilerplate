import React from 'react'
import { Link } from 'react-router-dom';
import './site-nav.scss'

function SiteNav() {
	return (
		<nav className="site_nav">
			<ul className="site_nav_list">
				<li className="site_nav_item">
					<Link className="site_nav_link" to="/">Home</Link>
				</li>
				<li className="site_nav_item">
					<Link className="site_nav_link" to="/components">Components</Link>
				</li>
			</ul>
		</nav>
	)
}

export default SiteNav