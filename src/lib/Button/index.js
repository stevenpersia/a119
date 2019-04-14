import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { values } from "underscore";
import "./styles.css";

export const BUTTON_TYPE = {
	primary: "primary",
	secondary: "secondary",
	success: "success",
	warning: "warning",
	danger: "danger",
	help: "help"
};

export const BUTTON_VARIANT = {
	outlined: "outlined",
	dashed: "dashed",
	link: "link"
};

const Button = ({
	text,
	type,
	variant,
	className,
	onClick,
	fullwidth,
	isDisabled,
	isLoading,
	...elementProps
}) => {
	const classes = Classnames(
		"button",
		className,
		`button--type-${type}`,
		variant && `button--variant-${variant}-${type}`,
		fullwidth && "button-fullwidth",
		isDisabled && "button-disabled"
	);

	return (
		<button
			className={classes}
			{...elementProps}
			onClick={onClick}
			disabled={isDisabled}
		>
			{isLoading ? (
				<div className="loader">
					<div />
					<div />
					<div />
				</div>
			) : (
				text
			)}
		</button>
	);
};

Button.defaultProps = {
	type: BUTTON_TYPE.secondary
};

Button.propTypes = {
	children: PropTypes.any,
	text: PropTypes.string,
	type: PropTypes.oneOf(values(BUTTON_TYPE)),
	variant: PropTypes.oneOf(values(BUTTON_VARIANT))
};

export default Button;
