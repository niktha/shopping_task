import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import logger from "redux-logger";
import routes from "./routes.js";
import thunk from "redux-thunk";
//actions 

import {applyMiddleware,  createStore} from "redux";

const middleware = applyMiddleware(thunk, logger);

const store = createStore(middleware);



class App extends React.Component {
	render() {
		return (
		<Provider store={store}>
			{routes}
		</Provider>);
	}
};

render(
	<App />, document.getElementById("container")
);
