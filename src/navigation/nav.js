import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav(props) {
	const menuItems = props.items.map((item, index) => {
		return(
			<li className="site_nav_item" key={index}>
				<NavLink
					className="site_nav_link"
					activeClassName="site_nav_link_active"
					exact={item.exact}
					to={item.to}>
						<span className="site_nav_link_icon">{item.icon}</span>
						<span className="site_nav_link_label">{item.label}</span>
				</NavLink>
			</li>
		)
	})

	return(
		<nav className={props.class}>
			<h2 className={props.class + '_title'}>{props.title}</h2>
			<ul className={props.class + '_list'}>
				{menuItems}
			</ul>
		</nav>
	)
}

export default Nav