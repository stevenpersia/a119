import React from "react";
import { render } from "react-dom";
import { Button } from "./lib";

const App = () => (
	<div style={{ width: 640, margin: "15px auto" }}>
		<Button type="secondary" text="Secondary" />
	</div>
);

render(<App />, document.getElementById("root"));
