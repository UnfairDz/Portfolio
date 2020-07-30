import React from "react";

import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer class="footer-distributed">
      <div class="footer-right">
        <a href="https://www.facebook.com/UnfairDz/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            size="1x"
            color="#dae1e7"
            className="icon-left"
          />
        </a>
        <a href="https://twitter.com/UnfairDz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            size="1x"
            color="#dae1e7"
            className="icon-left"
          />
        </a>
        <a href="https://github.com/UnfairDz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            size="1x"
            color="#dae1e7"
            className="icon-left"
          />
        </a>
      </div>

      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="#about">
            About
          </a>

          <a href="#education">Education</a>

          <a href="#skills">Skills</a>

          <a href="#interests">Interests</a>
        </p>

        <p>Ramzi Brikci Sid &copy; {year}</p>
      </div>
    </footer>
  );
}
