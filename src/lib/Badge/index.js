import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { values } from "underscore";
import "./styles.css";

export const BADGE_TYPE = {
	primary: "primary",
	secondary: "secondary",
	success: "success",
	warning: "warning",
	danger: "danger",
	help: "help"
};

const Badge = ({ value, type, className, ...elementProps }) => {
	const classes = Classnames("badge", className, `badge--type-${type}`);

	return (
		<span className={classes} {...elementProps}>
			{value}
		</span>
	);
};

Badge.defaultProps = {
	type: BADGE_TYPE.secondary
};

Badge.propTypes = {
	value: PropTypes.number,
	type: PropTypes.oneOf(values(BADGE_TYPE))
};

export default Badge;
