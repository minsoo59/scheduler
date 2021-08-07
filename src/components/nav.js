import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: "profileImg",
      list: "list",
      overlay: "overlay",
      on: "on",
      click: "click",
    };
  }

  clickHandler = () => {
    const profile = document.getElementById(this.state.profileImg),
      list = document.getElementById(this.state.list),
      overlay = document.getElementById(this.state.overlay);

    profile.classList.toggle(this.state.on);
    list.classList.toggle(this.state.on);
    overlay.classList.toggle(this.state.on);
  };

  componentDidMount() {
    const profile = document.getElementById(this.state.profileImg);
    const overlay = document.getElementById(this.state.overlay);

    profile.addEventListener(this.state.click, this.clickHandler);
    overlay.addEventListener(this.state.click, this.clickHandler);
  }
  render() {
    return (
      <>
        <div id={this.state.overlay} className={this.state.overlay}></div>
        <div
          className={"nav__profile__image " + this.state.on}
          id={this.state.profileImg}
        />
        <ul className={this.state.list} id={this.state.list}>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
        </ul>
      </>
    );
  }
}
