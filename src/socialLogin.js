import React from "react";

export function SocialLogin() {
  return (
    <div className="social__login__part">
      <div className="__github">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="__line">
        <a
          href="https://line.me/ko/?utm_source=naver&utm_medium=cpc&utm_campaign=brandsearch&utm_content=mainimage"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-line"></i>
        </a>
      </div>
      <div className="__google">
        <a href="https://www.google.co.kr/" target="_blank" rel="noreferrer">
          <i className="fab fa-google"></i>
        </a>
      </div>
    </div>
  );
}
