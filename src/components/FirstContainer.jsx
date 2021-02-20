import React from "react";
import illustration1 from "../images/illustration-1.svg";

function FirstContainer() {
  return (
    <div>
      <div class="container-fluid first-container">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.</p>.
            <form class="" action="index.html" method="post">
              <input type="post" placeholder="Enter your email.." />
              <button type="button" name="button" class="get-started-btn">Get Started</button>
            </form>
          </div>
          <div class="col-lg-6 col-sm-12">
            <img src={illustration1} alt="illustration-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContainer;
