import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
// import Login from "../routes/Login";
const url = "http://localhost:7700/";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      user: false,
      logined: false,
    };
  }
  getUserdata = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ username: data.username }));
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
