import React from "react";
import logo from "../logo.svg";
// import { Link } from "react-router-dom";
// import Login from "../routes/Login";

class Home extends React.Component {
  state = {
    user: false,
    logined: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ user: true });
    }, 3000);
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <a href="#/login">
              <img src={logo} className="App-logo" alt="logo" />
              <p> 😘💕 </p>
            </a>
            <p>{user ? "Plz click on thay picture" : "You're not user!"}</p>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
