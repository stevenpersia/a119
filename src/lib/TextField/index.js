import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

const TextField = ({
	className,
	fullwidth,
	error,
	success,
	helperText,
	placeholder,
	isDisabled,
	onChange,
	onBlur,
	name,
	value,
	...elementProps
}) => {
	const classes = Classnames(
		"textfield",
		error && "textfield-error",
		success && "textfield-success",
		className,
		fullwidth && "textfield-fullwidth"
	);

	return (
		<div className={classes}>
			<input
				{...elementProps}
				placeholder={placeholder}
				disabled={isDisabled}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
				value={value}
			/>
			{helperText && <span className="helper-text">{helperText}</span>}
		</div>
	);
};

TextField.propTypes = {
	helperText: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string
};

export default TextField;
