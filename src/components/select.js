import React from 'react'

function Select(props, ref) {
	const items = props.items.map((item, index) =>
		<option value={item.value} key={index}>{item.label}</option>
	)

	return (
		<div className={props.className + '_field'}>
			<label className={props.className + '_label'} htmlFor={props.name}>{props.label}</label>
			<select className={props.className} id={props.name} name={props.name} ref={ref}>
				{items}
			</select>
		</div>
	)
}

const forwardedSelect = React.forwardRef(Select)

export default forwardedSelect