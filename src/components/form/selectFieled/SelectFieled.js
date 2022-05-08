import React from "react";


 function SelectField({label, name, onChange, list }) {
	const createOptionsState = () => {
		return list.map((item, index) => {
			return <option key={index} value={item.label}>{item.label}</option>;
		});
	};

	return (
		<React.Fragment>
			<label htmlFor={name}>{label}</label>
			<select  name={name}  onChange={onChange}>
				{createOptionsState()}
			</select>
		</React.Fragment>
	);
}

export default SelectField