import React from "react";
import { Nav } from "../components/nav";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      fireRedirect: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  render() {
    return (
      <>
        <h1 className="profile__title" id="profile">
          Profile
        </h1>
        <Nav />
        <form className="profile__form">
          <div className="profile__image"></div>

          <div className="typing__Id">
            <h4>User name</h4>
            <div>
              <i className="fas fa-user-check"></i>
              <input
                onChange={this.handleNameChange}
                placeholder="Type your username"
                name="username"
                type="text"
                value={this.state.username}
                required
              />
            </div>
          </div>
          <div className="typing__Password">
            <h4>Password</h4>
            <div>
              <i className="fas fa-lock" />
              <input
                onChange={this.handlePasswordChange}
                placeholder="Type your password"
                name="password"
                type="password"
                value={this.state.password}
                required
              />
            </div>
          </div>
          <div className="typeing__submit">
            <input type="submit" value="Complete" />
          </div>
        </form>
      </>
    );
  }
}
