import React from "react";

import "./education.css";

export default function Education() {
  return (
    <div>
      <div id="education" class="anchor"></div>
      <section className="education-section">
        <h1 className="section-education-title">Education</h1>
        <hr className="section-education-underline"></hr>
        <div className="education-info">
          <div className="info">
            <h1 className="school">
              Bouaziz Rabira high school - Oran, Algeria;
            </h1>
            <p className="year">2013-2016</p>
            <p className="info-description">
              Graduated in 2016 with High Honors in Baccalaureate.
            </p>
          </div>
          <div className="info">
            <h1 className="school">
              University of Science and Technology of Oran, Algeria;
            </h1>
            <p className="year">2016–2019</p>
            <p className="info-description">
              Graduated in 2019 Bachelor in Computer Science (Information System).
            </p>
          </div>
          <div className="info">
            <h1 className="school">
              University of Science and Technology of Oran, Algeria;
            </h1>
            <p className="year">2019-Now</p>
            <p className="info-description">
              Studying to get my Master degrée in Database Management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
