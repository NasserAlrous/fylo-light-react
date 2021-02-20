import React from "react";
import logo from "../images/logo.svg"

function NavBar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-transparent">
        <a class="navbar-brand" href="#"><img src={logo} alt="logo" class="logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Features <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
