import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { values } from "underscore";
import "./styles.css";

export const AVATAR_SIZE = {
	tiny: "tiny",
	small: "small",
	medium: "medium",
	large: "large",
	big: "big"
};

export const AVATAR_VARIANT = {
	circle: "circle",
	square: "square"
};

export const AVATAR_STATUS = {
	approved: "approved",
	declined: "declined",
	locked: "locked"
};

export const AVATAR_PRESENCE = {
	online: "online",
	busy: "busy",
	away: "away",
	focus: "focus",
	offline: "offline"
};

const Avatar = ({
	size,
	variant,
	status,
	presence,
	src,
	alt,
	onClick,
	className,
	...elementProps
}) => {
	const classes = Classnames(
		"avatar",
		className,
		`avatar--size-${size}`,
		`avatar--variant-${variant}`,
		onClick && "avatar-hover"
	);
	return (
		<div
			className={`avatar--size-${size} avatar--variant-${variant}`}
			style={{ position: "relative" }}
		>
			<div className={classes} onClick={onClick}>
				<img src={src} alt={alt} {...elementProps} />
			</div>
			{presence && <span className={`avatar--presence-${presence}`} />}
		</div>
	);
};

Avatar.defaultProps = {
	size: AVATAR_SIZE.medium,
	variant: AVATAR_VARIANT.circle
};

Avatar.propTypes = {
	size: PropTypes.oneOf(values(AVATAR_SIZE)),
	variant: PropTypes.oneOf(values(AVATAR_VARIANT)),
	status: PropTypes.oneOf(values(AVATAR_STATUS)),
	presence: PropTypes.oneOf(values(AVATAR_PRESENCE)),
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string
};

export default Avatar;
