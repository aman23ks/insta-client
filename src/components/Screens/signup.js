import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Name" />

        <input type="password" placeholder="Password" />
        <button
          className="btn waves-effect waves-light #64b5f6 blue lighten-2
"
          type="submit"
          name="action"
        >
          SignUp
        </button>
        <h5>
          <Link to="/signin">Already have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default signup;