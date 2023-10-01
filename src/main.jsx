import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from "./provider/provider";
import { router } from "./router/index.jsx";
import "./styles/styles.scss";
// makeServer({ environment: "development" });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
