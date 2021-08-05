import React from "react";
import { SocialLogin } from "./socialLogin";
const url = "http://localhost:7700/";
class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const form = document.getElementById("joinForm");
    const input = document.querySelectorAll("input");

    const handleSubmit = async (event) => {
      event.preventDefault();
      input.forEach((list) => {
        let inputValue = [];
        inputValue = list.value;
        console.log(inputValue);
      });
      await fetch(url + "join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
    };

    if (form) form.addEventListener("submit", handleSubmit);
  }

  render() {
    return (
      <>
        <h1 className="join__title"> Create Account </h1>
        <div className="social__Login">
          <SocialLogin></SocialLogin>
          <div className="social__anounce">Or use your email account</div>
        </div>
        <form id="joinForm" className="join__form" method="POST">
          <div className="typing__Id">
            <h4>User name</h4>
            <div>
              <i className="fas fa-user-check"></i>
              <input
                placeholder="Type your username"
                name="username"
                type="text"
                required
              ></input>
            </div>
          </div>
          <div className="typing__Email">
            <h4>User Email</h4>
            <div>
              <i className="fas fa-at"></i>
              <input
                placeholder="Type your email"
                name="email"
                type="email"
                required
              ></input>
            </div>
          </div>
          <div className="typing__Password">
            <h4>Password</h4>
            <div>
              <i className="fas fa-lock" />
              <input
                placeholder="Type your password"
                name="password"
                type="password"
                required
              ></input>
            </div>
          </div>
          <div className="typeing__submit">
            <input type="submit" value="Join"></input>
          </div>
        </form>
        <div className="ToNewPage">
          <a href="#/login"> Login ➡</a>
        </div>
      </>
    );
  }
}
export default Join;
