import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { values } from "underscore";
import "./styles.css";

const Switch = ({ className, ...elementProps }) => {
	const classes = Classnames("switch", className);

	return (
		<>
			<input
				type="checkbox"
				id="toggle"
				className="offscreen"
				{...elementProps}
			/>
			<label for="toggle" className={classes} />
		</>
	);
};

Switch.defaultProps = {};

Switch.propTypes = {};

export default Switch;
