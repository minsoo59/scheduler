import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="nav__profile__image">
      <Link to="/profile" />
    </div>
  );
}
