import React from "react";
import { SocialLogin } from "../socialLogin";
function Login() {
  return (
    <>
      <h1 className="login__title"> Sign to Schduler </h1>
      <div className="social__Login">
        <SocialLogin></SocialLogin>
        <div className="social__anounce">Or use your email account</div>
      </div>
      <form id="loginForm" className="login__form" method="POST">
        <div className="typing__Id">
          <h4>User name</h4>
          <div>
            <i class="fas fa-user-check"></i>
            <input
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
            <i class="fas fa-lock" />
            <input
              placeholder="Type your password"
              name="password"
              type="password"
              required
            ></input>
          </div>
        </div>
        <div className="forgetPw">
          <a href="#/change_pw">Forget password?</a>
        </div>
        <div className="typeing__submit">
          <input type="submit" value="Login"></input>
        </div>
      </form>
      <div className="ToNewPage">
        <a href="#/join">Join ➡</a>
      </div>
    </>
  );
}
export default Login;
