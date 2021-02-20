import React from "react";
import illustration2 from "../images/illustration-2.svg";
import profileImg from "../images/avatar-testimonial.jpg";

function SecondContainer() {
  return (
    <div>
    <div class="container-fluid second-container">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <h1>Stay productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required!</p>
          <a href="">See how Fylo works</a>
          <div class="card">
            <p>Fylo has improved our team productivity by an order of magnitude. Since
            making the switch our team has become a well-oiled collaboration machine.</p>
            <img src={profileImg} alt="profile-img" class="profile-img" />
            <span class="span-text"><p>Kyle Burton</p>
            <p>Founder & CEO, Huddle</p></span>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <img src={illustration2} alt="illustration-2" class="illustration-2"/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SecondContainer;
