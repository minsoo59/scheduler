import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
// import Login from "../routes/Login";
const url = "http://localhost:7700/";

class Home extends React.Component {
  state = {
    username: String,
    password: Number,
    email: String,
    fireRedirect: false,
  };
  getUserdata = async () => {
    const res = await fetch(url);
    const json = await res.json();
    this.setState({ username: json.username });
  };

  componentDidMount() {
    this.getUserdata();
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Link to="/login">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <p>
              {username ? `Welcome ${username} 😘💕` : `You're ${username}!`}
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
