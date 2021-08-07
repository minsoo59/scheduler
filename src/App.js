import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Change_Pw from "./routes/Change_Pw";
import main from "./routes/main";
import Profile from "./routes/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    let user = {
      loggedIn: false,
    };
    this.state = {
      user,
    };

    // this.authenticate = this.authenticate.bind(this);
  }
  // authenticate(user) {
  //   this.setState({
  //     user,
  //   });
  // }

  render() {
    return (
      <HashRouter>
        <Route
          path="/"
          exact={true}
          component={Home}
          // authenticate={this.authenticate}
        />
        <Route
          path="/login"
          component={Login}
          // authenticate={this.authenticate}
        />
        <Route
          path="/join"
          component={Join}
          // authenticate={this.authenticate}
        />
        <Route path="/change_pw" component={Change_Pw} />
        <Route path="/main" component={main} />
        <Route path="/profile" component={Profile} />
      </HashRouter>
    );
  }
}
