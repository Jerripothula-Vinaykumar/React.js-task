import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="landingpagecontainer">
      <div className="landingpagecontentcontainer">
        <div>
          <p className="wecometxt">Welcome to PopX</p>
          <p className="loremtxt">Lorem ipsum dolor sit,</p>
          <p className="loremtxt">amet consectetur adipisicing elit,</p>
          <button className="createaccbutton"><Link className="linktag" to="/Register">Create Account</Link></button>
          <button className="alreadyregisteredbutton"><Link className="linktag" to="/SignUp">Already Registered?Login</Link></button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
