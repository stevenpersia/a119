import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { values } from "underscore";
import "./styles.css";

const ButtonGroup = ({ className, children, ...elementProps }) => {
	const classes = Classnames(
		"button-group",
		children.length >= 3 && "button-group-3am",
		children.length === 2 && "button-group-2b",
		className
	);
	console.log(children.length);
	return (
		<div className={classes} {...elementProps}>
			{children}
		</div>
	);
};

ButtonGroup.defaultProps = {};

ButtonGroup.propTypes = {};

export default ButtonGroup;
