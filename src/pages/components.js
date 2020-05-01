import React from 'react'
import Select from '../components/select'
import { useForm } from 'react-hook-form'

function Components() {
	const methods = useForm();
  const { handleSubmit, register } = methods;
  const onSubmit = data => console.log(data);

	return(
		<React.Fragment>
    	<h1>Components</h1>
			<form onSubmit={ handleSubmit(onSubmit) }>
				<Select
					className="select"
					name="select"
					label="Select Label"
					id="select_1"
					options={[
						{
							value: "option 1",
							label: "Option 1"
						},
						{
							value: "option 2",
							label: "Option 2"
						}
					]}
					ref={ register }
				/>
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	)
}

export default Components