import React from "react";
import { Link } from "react-router-dom";

const startGithubLogin = (req, res) => {
  // 일단 소셜 로그인 부분은 나중에 하자. 우선 User CRUD 부터!
  // const baseUrl = `https://github.com/login/oauth/authorize`;
};

export function SocialLogin() {
  return (
    <div className="social__login__part">
      <div className="__github">
        <Link
          to="/github/start"
          target="_blank"
          rel="noreferrer"
          onChange={startGithubLogin}
        >
          <i className="fab fa-github" />
        </Link>
      </div>
      <div className="__line">
        <Link
          to="https://line.me/ko/?utm_source=naver&utm_medium=cpc&utm_campaign=brandsearch&utm_content=mainimage"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-line" />
        </Link>
      </div>
      <div className="__google">
        <Link to="https://www.google.co.kr/" target="_blank" rel="noreferrer">
          <i className="fab fa-google" />
        </Link>
      </div>
    </div>
  );
}
