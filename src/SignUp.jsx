import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signupcontainer">
      <div className="signupcontentcontainer">
        <div className="signupheadtxt"> <p className="signintxt">Signin to your </p>
        <p className="signintxt">PopX Account</p>  <p className="loremtxt">Lorem ipsum dolor sit,</p>
          <p className="loremtxt">amet consectetur adipisicing elit,</p>
         </div>
      <div className="form-container">
         <div class="input-box">
            <label for="password">
              Email address
            </label>
            <input disabled placeholder="Enter email Address" type="password" id="password" />
          </div>

          <div class="input-box">
            <label for="city">
              Password
            </label>
            <input disabled  placeholder="Enter password" type="text" id="city" />
          </div>
          <button className="loginbutton">
          <Link className="linktag" to="/Home">
            Login
          </Link>
        </button>
      </div>
      </div>
    </div>
  );
}

export default SignUp;
