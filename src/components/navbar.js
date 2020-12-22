import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/Signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
