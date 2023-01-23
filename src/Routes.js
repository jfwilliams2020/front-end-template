import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [

]

export const Routes = () => (
	<Router>
		<Switch>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
				>
					<route.Component />
				</Route>
			))}
		</Switch>
	</Router>
)
