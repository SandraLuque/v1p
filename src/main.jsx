import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./provider/provider";
import "./styles/styles.scss";
// makeServer({ environment: "development" });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>,
);
