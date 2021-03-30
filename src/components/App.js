import { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		console.log(this.props.users);
		return (
			<div>
				<h1>baba</h1>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => {
	return {
		users: Object.keys(users),
	};
};

export default connect(mapStateToProps)(App);
