import React, { useState } from "react";

import "./skills.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function whichTitle(partNumber) {
  if (partNumber === 0) {
    return (
      <h1 className="section-skills-title">
        Skills<span className="brand-function">/Coding</span>
      </h1>
    );
  } else if (partNumber === 1) {
    return (
      <h1 className="section-skills-title">
        Skills<span className="brand-function">/Software</span>
      </h1>
    );
  } else {
    return (
      <h1 className="section-skills-title">
        Skills<span className="brand-function">/Language</span>
      </h1>
    );
  }
}

function whichPart(partNumber) {
  if (partNumber === 0) {
    return (
      <div className="section-skills-content-elements">
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">HTML & CSS</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load80"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">80%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Java Script</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load80"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">80%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">React</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load60"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">60%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">MongoDB</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load60"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">60%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">EJS</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load60"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">60%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Express</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load50"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">50%</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (partNumber === 1) {
    return (
      <div className="section-skills-content-elements">
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Photoshop</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load20"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">20%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Blender</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load60"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">60%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Latex</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load50"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">50%</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Office</p>
          </div>
          <div className="progress-value-display">
            <div class="progress">
              <div class="progress-value load80"></div>
            </div>
            <div>
              <p className="skill-pourcentage load4s">80%</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="section-skills-content-elements languages">
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">Arabic</p>
          </div>
          <div className="progress-value-display">
            <div>
              <p className="skill-pourcentage load2s">Native</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">English</p>
          </div>
          <div className="progress-value-display">
            <div>
              <p className="skill-pourcentage load2s">Conversant</p>
            </div>
          </div>
        </div>
        <div className="section-skills-content-element">
          <div>
            <p className="skill-name">French</p>
          </div>
          <div className="progress-value-display">
            <div>
              <p className="skill-pourcentage load2s">Fluent</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function circularArrray(number) {
  if (number === 0) {
    return 2;
  } else {
    return number - 1;
  }
}

export default function Skills() {
  const [part, setPart] = useState(0);

  return (
    <div>
      <div id="skills" class="anchor"></div>
      <section className="skills-section">
        {whichTitle(part)}
        <hr className="section-skills-underline"></hr>
        <div className="section-skills-content">
          <div className="section-skills-content-previous">
            <div className="icon" onClick={() => setPart(circularArrray(part))}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="5x"
                color="#DAE1E7"
                className="icon-left"
              />
            </div>
          </div>
          {whichPart(part)}
          <div className="section-skills-content-next">
            <div className="icon" onClick={() => setPart((part + 1) % 3)}>
              <FontAwesomeIcon
                icon={faAngleRight}
                size="5x"
                color="#DAE1E7"
                className="icon-right"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
