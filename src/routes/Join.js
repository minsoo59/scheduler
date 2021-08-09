import React from "react";
import { SocialLogin } from "../components/socialLogin";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const url = "http://localhost:7700/";

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: String,
      password: Number,
      email: String,
      fireRedirect: false,
    };

    this.NameChange = this.NameChange.bind(this);
    this.EmailChange = this.EmailChange.bind(this);
    this.PasswordChange = this.PasswordChange.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  NameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  EmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  PasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  Submit = async (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    try {
      const res = await fetch(url + "join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const { status } = res;
      const json = JSON.parse(await res.text());
      if (status === 200 && json === "Successful") {
        this.setState({
          fireRedirect: true,
        });
      } else {
        this.setState({
          error: json.message,
        });
        console.log(`Server response of Join is ${json}`);
      }
    } catch (error) {
      console.error("Error in Join Server " + error);
    }
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
          onSubmit={this.Submit}
          id="joinForm"
          className="join__form"
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
          <div className="typing__Email">
            <h4>User Email</h4>
            <div>
              <i className="fas fa-at" />
              <input
                onChange={this.EmailChange}
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
                onChange={this.PasswordChange}
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
