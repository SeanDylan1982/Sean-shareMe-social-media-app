import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

// ReactDOM.render(
// 	<Router>
// 		<App />
// 	</Router>,
// 	document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Router>
		<App />
	</Router>
);
