import React from "react";
import { SocialLogin } from "../components/socialLogin";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const url = "http://localhost:7700/";

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: "",
      fireRedirect: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    await fetch(url + "join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.text())
      .then((resText) => {
        resText = JSON.parse(resText);
        console.log(resText);
        if (resText.message === "Successful") {
          let { props } = this;
          props = {
            username: this.state.username,
            email: this.state.email,
            loggedIn: true,
          };
          console.log(props);
          this.setState({
            error: "",
            fireRedirect: true,
          });
        } else {
          this.setState({
            error: resText.message,
          });
          console.log("API response of signup: " + resText);
        }
      })
      .catch((error) => {
        console.error("Error in Signup API " + error);
      });
  };

  render() {
    return (
      <>
        <h1 className="join__title"> Create Account </h1>
        <div className="social__Login">
          <SocialLogin />
          <div className="social__anounce">Or use your email account</div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          id="joinForm"
          className="join__form"
          method="POST"
        >
          <div className="typing__Id">
            <h4>User name</h4>
            <div>
              <i className="fas fa-user-check"></i>
              <input
                onChange={this.handleNameChange}
                placeholder="Type your username"
                name="username"
                type="text"
                required
              />
            </div>
          </div>
          <div className="typing__Email">
            <h4>User Email</h4>
            <div>
              <i className="fas fa-at"></i>
              <input
                onChange={this.handleEmailChange}
                placeholder="Type your email"
                name="email"
                type="email"
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
                required
              />
            </div>
          </div>
          <div className="typeing__submit">
            <input type="submit" value="Join" />
          </div>
        </form>
        <div className="ToNewPage">
          <Link to="/login"> Login ➡</Link>
        </div>
        {this.state.fireRedirect && <Redirect to="/login" push={true} />}
      </>
    );
  }
}
