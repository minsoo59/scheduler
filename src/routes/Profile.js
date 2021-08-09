import React from "react";
import Nav from "../components/nav";
import axios from "axios";
import { Redirect } from "react-router";

const url = "http://localhost:7700/";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", //여기도 session 필요함....
      password: "",
      error: "",
      fireRedirect: false,
    };

    this.NameChange = this.NameChange.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  NameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  Submit = async (e) => {
    e.preventDefault();
    const { username } = this.state;
    try {
      const res = await fetch(`${url}profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        }),
      });
      const { status } = res;
      console.log(`status : ${status}, res : ${res.session}`);
      const json = JSON.parse(await res.text());
      if (status === 200) {
        this.setState({
          fireRedirect: true,
        });
      } else {
        this.setState({
          error: json.message,
        });
        console.log(`Server response of Profile modified is ${json}`);
      }
    } catch (error) {
      console.error("Error in Profile modified Server " + error);
    }
  };
  async componentDidMount() {
    try {
      // { username, password }
      const res = await axios.get(`${url}profile`);
      console.log(`getProfile : ${res.data}`);
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <>
        <h1 className="profile__title" id="profile">
          Profile
        </h1>
        <Nav />
        <form className="profile__form" onSubmit={this.Submit}>
          <div className="profile__image" />
          <div className="typing__Id">
            <h4>User name</h4>
            <div>
              <i className="fas fa-user-check" />
              <input
                onChange={this.NameChange}
                placeholder="Type your username"
                name="username"
                type="text"
                value={this.state.username}
                required
              />
            </div>
          </div>
          <div className="typeing__submit">
            <input type="submit" value="Complete" />
          </div>
        </form>
        {this.state.fireRedirect && <Redirect to="/main" push={true} />}
      </>
    );
  }
}
