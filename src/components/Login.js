import { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
class Login extends Component {
	constructor(props) {
		super();
		this.state = {
			authedUser: null,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSelectUser = this.handleSelectUser.bind(this);
	}

	handleChange = (e) => {
		const selectedUser = e.target.value;
		this.setState({
			authedUser: selectedUser,
		});
	};

	handleSelectUser = (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		console.log(this.state);
		dispatch(setAuthedUser(this.state.authedUser));
	};

	render() {
		const { users } = this.props;
		const selectUser = "Select user";
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSelectUser}>
					<select onChange={this.handleChange}>
						<option>{selectUser}</option>
						{users.map((user) => (
							<option key={user}>{user}</option>
						))}
					</select>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => {
	return {
		users: Object.keys(users),
	};
};

export default connect(mapStateToProps)(Login);
