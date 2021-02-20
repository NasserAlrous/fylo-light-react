import React from "react";
import logo from "../images/logo-footer.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";

function FourthContainer() {
  return (
    <div>
      <div class="container-fluid fourth-container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <img src={logo} alt="logo" />
            <p><img src={phoneIcon} alt="phone-icon" /> +1-543-123-4567</p>
            <p><img src={emailIcon} alt="email-icon" /> example@fylo.com</p>
          </div>
          <div class="col-lg-4 col-sm-12">
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-sm-12">
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Terms</a></li>
              <li><a href="">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthContainer;
