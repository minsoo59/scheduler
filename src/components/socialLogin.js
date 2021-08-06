import React from "react";
import { Link } from "react-router-dom";

export function SocialLogin() {
  return (
    <div className="social__login__part">
      <div className="__github">
        <Link to="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </Link>
      </div>
      <div className="__line">
        <Link
          to="https://line.me/ko/?utm_source=naver&utm_medium=cpc&utm_campaign=brandsearch&utm_content=mainimage"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-line"></i>
        </Link>
      </div>
      <div className="__google">
        <Link to="https://www.google.co.kr/" target="_blank" rel="noreferrer">
          <i className="fab fa-google"></i>
        </Link>
      </div>
    </div>
  );
}
