import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="login" component={Login} />
    </HashRouter>
  );
}

export default App;
