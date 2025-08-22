import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="Registerpagemaincontainer">
      <div className="regsiterpagecontentcontainer">
        <p className="wecometxt">Create your </p>
        <p className="wecometxt">PopX Account</p>

        <div className="form-container">
          <div className="input-box">
            <label htmlFor="name">
              Full Name<span className="requiredstar">*</span>
            </label>
            <input disabled type="text" id="name" placeholder="Marry Doe"/>
          </div>

          <div className="input-box">
            <label htmlFor="email">
              Phone Number<span className="requiredstar">*</span>
            </label>
            <input disabled  placeholder="Marry Doe" type="email" id="email" />
          </div>

          <div className="input-box">
            <label for="password">
              Email address<span className="requiredstar">*</span>
            </label>
            <input disabled placeholder="Marry Doe" type="password" id="password" />
          </div>

          <div className="input-box">
            <label for="city">
              Password<span className="requiredstar">*</span>
            </label>
            <input disabled  placeholder="Marry Doe" type="text" id="city" />
          </div>
          <div className="input-box">
            <label for="city">
              Company Name<span className="requiredstar">*</span>
            </label>
            <input disabled  placeholder="Marry Doe" type="text" id="city" />
          </div>
         <div> <p className="areyouanagencytxt">Are you an Agency?</p>
        <div className="inputradiocontainer"><input className="agency" checked type="radio" name="" id="" /><label className="yesandno" htmlFor="agency">Yes</label><input disabled type="radio" name="" id="" /><label htmlFor="agency">No</label>
        </div></div>
        </div>
        <div className="buttoncontainer">
            <button className="createaccbutton">
          <Link className="linktag" to="/Home">
            Create Account
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
