import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { values } from "underscore";
import "./styles.css";

export const AVATAR_GROUP_VARIANT = {
	stack: "stack",
	grid: "grid"
};

const AvatarGroup = ({ className, children, variant, ...elementProps }) => {
	const classes = Classnames(
		"avatar-group",
		className,
		`avatar-group--variant-${variant}`
	);

	return (
		<div className={classes} {...elementProps}>
			{children}
		</div>
	);
};

AvatarGroup.defaultProps = {
	variant: AVATAR_GROUP_VARIANT.stack
};

AvatarGroup.propTypes = {
	variant: PropTypes.oneOf(values(AVATAR_GROUP_VARIANT))
};

export default AvatarGroup;
