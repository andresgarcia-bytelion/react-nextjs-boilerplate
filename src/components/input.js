import React from 'react'

function Input(props, ref) {
	return (
		<div className={props.className + '_field'}>
			<label className={props.className + '_label'} htmlFor={props.name}>{props.label}</label>
			<input className={props.className} id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} ref={ref}/>
		</div>
	)
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput