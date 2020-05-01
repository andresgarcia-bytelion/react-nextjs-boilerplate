import React from 'react'

function Select(props, ref) {
	const options = props.options.map((option, index) =>
		<option value={ option.value } key={ index }>{ option.label }</option>
	)

	return (
		<div className={ props.className + '_field' }>
			<label className={ props.className + '_label' } id={ props.id }>{ props.label }</label>
			<select className={ props.className } id={ props.id } name={ props.name } ref={ ref }>
				{ options }
			</select>
		</div>
	)
}

const forwardedSelect = React.forwardRef(Select);

export default forwardedSelect