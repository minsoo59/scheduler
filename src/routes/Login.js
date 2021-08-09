import React from "react";
import { SocialLogin } from "../components/socialLogin";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

const url = "http://localhost:7700/";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: String,
      password: Number,
      fireRedirect: false,
    };
    this.NameChange = this.NameChange.bind(this);
    this.PasswordChange = this.PasswordChange.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  NameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  PasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  Submit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const res = await fetch(`${url}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const { status, ok } = res;
      console.log(`status : ${status}, ok : ${ok} `);
      const json = JSON.parse(await res.text());
      console.log("json" + json);
      if (status === 200 && ok) {
        this.setState({
          fireRedirect: true,
        });
      } else {
        this.setState({
          error: json.error,
        });
        console.log(`Server response of Login is ${json.error}`);
      }
    } catch (error) {
      console.error("Error in Login Server " + error);
    }
  };
  async componentDidMount() {
    try {
      const res = await axios.get(`${url}login`);
      console.log(`getLogin : ${res.data}`);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        <h1 className="login__title"> Sign to Schduler </h1>
        <div className="social__Login">
          <SocialLogin />
          <div className="social__anounce">Or use your email account</div>
        </div>
        <form
          onSubmit={this.Submit}
          id="loginForm"
          className="login__form"
          method="POST"
        >
          <div className="typing__Id">
            <h4>User name</h4>
            <div>
              <i className="fas fa-user-check" />
              <input
                onChange={this.NameChange}
                placeholder="Type your username"
                name="username"
                type="text"
                required
              />
            </div>
          </div>
          <div className="typing__Password">
            <h4>Password</h4>
            <div>
              <i className="fas fa-lock" />
              <input
                onChange={this.PasswordChange}
                placeholder="Type your password"
                name="password"
                type="password"
                required
              />
            </div>
          </div>
          <div className="forgetPw">
            <Link to="/change_pw">Forget password?</Link>
          </div>
          <div className="typeing__submit">
            <input type="submit" value="Login" />
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
