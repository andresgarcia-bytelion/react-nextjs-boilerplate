---
to: src/components/<%=name%>.js
---
import React from "react"
import "./<%=name%>.scss"

function <%=Name%>() {
	return(
		<div className="<%=name%>">
			<div className="<%=name%>_row">
				<div className="<%=name%>_inner">
				</div>
			</div>
		</div>
	)
}

export default <%=Name%>