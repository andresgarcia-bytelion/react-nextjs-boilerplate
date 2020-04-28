import React from "react"
import SiteNav from "../navigation/site-nav"
import "./header.scss"

function Header() {
	return(
		<header className="header">
			<h1>Header</h1>
			<SiteNav />
		</header>
	)
}

export default Header