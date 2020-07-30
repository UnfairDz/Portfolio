import React from "react";

import "./me.css";

import Moi from "../../images/Ramzi.jpg"

export default function Me() {
  return (
    <div className="me-section">
      <img className="me-img" src={Moi} alt="Me"></img>
      <p className="name">
        Ramzi
        <br />
        Brikci Sid
      </p>
      <hr className="line"></hr>
      <p className="function">Web Developer</p>
    </div>
  );
}
