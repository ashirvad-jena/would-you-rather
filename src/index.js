import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";

const store = createStore(reducers, middleware);
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
