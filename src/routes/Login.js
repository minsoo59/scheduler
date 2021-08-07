import React from "react";
import { SocialLogin } from "../components/socialLogin";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const url = "http://localhost:7700/";

export default class Login extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    await fetch(url + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
            password: this.state.password,
            loggedIn: true,
          };
          this.setState({
            error: "",
            fireRedirect: true,
          });
        } else {
          this.setState({
            error: resText.message,
          });
          console.log("API response of login: " + resText);
        }
      })
      .catch((error) => {
        console.error("Error in Signup API " + error);
      });
  };
  render() {
    return (
      <>
        <h1 className="login__title"> Sign to Schduler </h1>
        <div className="social__Login">
          <SocialLogin />
          <div className="social__anounce">Or use your email account</div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          id="loginForm"
          className="login__form"
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
              ></input>
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
              ></input>
            </div>
          </div>
          <div className="forgetPw">
            <Link to="/change_pw">Forget password?</Link>
          </div>
          <div className="typeing__submit">
            <input type="submit" value="Login"></input>
          </div>
        </form>
        <div className="ToNewPage">
          <Link to="/join">Join ➡</Link>
        </div>
        {this.state.fireRedirect && <Redirect to="/main" push={true} />}
      </>
    );
  }
}
