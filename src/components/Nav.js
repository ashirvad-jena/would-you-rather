import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";
class Nav extends Component {
	constructor(props) {
		super();
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout = (e) => {
		const { dispatch } = this.props;
		dispatch(removeAuthedUser());
	};

	render() {
		const { authedUser, profilePicURL } = this.props;
		return (
			<nav className="nav">
				<img src={profilePicURL} alt="avatar" />
				<h3>{authedUser}</h3>
				<ul>
					<li>
						<NavLink to="/" exact activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/leadership" activeClassName="active">
							Leadership
						</NavLink>
					</li>
					<li>
						<NavLink to="/newQuestion" activeClassName="active">
							New Question
						</NavLink>
					</li>
					<li>
						<button onClick={this.handleLogout}>Logout</button>
					</li>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = ({ authedUser, users }) => {
	return {
		authedUser,
		profilePicURL: users[authedUser].avatarURL,
	};
};

export default connect(mapStateToProps)(Nav);
