import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRouter
} from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <Home />
	},
	{
		path: "/home",
		isExactPath: true,
		component: <Home />
	}
];

const routes = (
	<BrowserRouter>
		<Switch>
			
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</BrowserRouter>
);

export default routes;