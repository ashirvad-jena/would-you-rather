import { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { isLoading, isNavBar } = this.props;
		console.log(isNavBar);
		return (
			<div>
				<Router>
					<Fragment>
						<div>
							{isLoading ? (
								<LoadingBar />
							) : isNavBar ? (
								<Nav />
							) : (
								<div>
									<Route path="/" exact component={Login} />
								</div>
							)}
						</div>
					</Fragment>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = ({ users, authedUser }) => {
	console.log(users, authedUser);
	return {
		isLoading: Object.keys(users).length === 0,
		isNavBar: authedUser !== null,
	};
};

export default connect(mapStateToProps)(App);
