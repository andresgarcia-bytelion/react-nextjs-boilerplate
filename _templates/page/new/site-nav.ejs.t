---
inject: true
to: src/navigation/site-nav.js
before: </ul>
---
					<li className="site_nav_item">
						<NavLink
							className="site_nav_link"
							activeClassName="site_nav_link_active"
							to="/<%=name%>"><%=Name%></NavLink>
					</li>