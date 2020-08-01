import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./navBar.css";

function responsiveNav() {
  const x = document.getElementById("responsive");
  if (x.className === "not-displayed") {
    x.className = "displayed";
  } else if (x.className === "displayed") {
    x.className = "not-displayed";
  }
}

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <p className="navbar-brand">
          Ramzi BS <span className="brand-function">/ Web Developer</span>
        </p>
        <ul className="nav">
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#education">EDUCATION</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#interests">INTERESTS</a>
          </li>
        </ul>
        <button class="nav-icon" onClick={() => responsiveNav()}>
          <FontAwesomeIcon icon={faBars} size="1x" color="#DAE1E7" />
        </button>
      </nav>
      <div id="responsive" className="not-displayed">
        <ul>
          <li>
            <a href="#about" onClick={() => responsiveNav()}>
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => responsiveNav()}>
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => responsiveNav()}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#interests" onClick={() => responsiveNav()}>
              INTERESTS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
