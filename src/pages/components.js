import React from 'react'
import { useForm } from 'react-hook-form'
import Select from '../components/select'
import Input from '../components/input'

function Components() {
	const methods = useForm();
	const { handleSubmit, errors, register } = methods;
	const onSubmit = data => console.log(data);

	return (
		<React.Fragment>
			<h1>Components</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Select
					className="select"
					name="select_1"
					label="Select Label"
					items={[
						{
							value: "option 1",
							label: "Option 1"
						},
						{
							value: "option 2",
							label: "Option 2"
						}
					]}
					ref={register}
				/>
				<Input
					className="input"
					name="input_1"
					label="Input Label"
					type="search"
					placeholder="text"
					ref={register({
						required: true,
						pattern: /^[A-Za-z]+$/i
					})}
				/>
				{errors.input_1 && 'First name required'}
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	)
}

export default Components