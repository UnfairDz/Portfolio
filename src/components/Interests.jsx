import React from "react";

import "./interests.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGamepad,
  faFilm,
  faFutbol,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";

export default function Interests() {
  return (
    <div>
      <div id="interests" class="anchor"></div>
      <section className="interests-section">
        <h1 className="section-interests-title">Interests</h1>
        <hr className="section-interests-underline"></hr>
        <div className="section-interests-content">
          <div className="section-interests-2elements">
            <div className="section-interests-element">
              <div className="interests-rounded-img">
                <FontAwesomeIcon
                  icon={faGamepad}
                  size="5x"
                  color="#DAE1E7"
                  className="interests-icons"
                />
              </div>
              <div>
                <p className="interests-element-title">Gaming</p>
              </div>
            </div>
            <div className="section-interests-element">
              <div className="interests-rounded-img">
                <div>
                  <FontAwesomeIcon
                    icon={faFilm}
                    size="5x"
                    color="#DAE1E7"
                    className="interests-icons"
                  />
                </div>
              </div>
              <div>
                <p className="interests-element-title">Movies</p>
              </div>
            </div>
          </div>
          <div className="section-interests-2elements">
            <div className="section-interests-element">
              <div className="interests-rounded-img">
                <FontAwesomeIcon
                  icon={faFutbol}
                  size="5x"
                  color="#DAE1E7"
                  className="interests-icons"
                />
              </div>
              <div>
                <p className="interests-element-title">Sport</p>
              </div>
            </div>
            <div className="section-interests-element">
              <div className="interests-rounded-img">
                <FontAwesomeIcon
                  icon={faToriiGate}
                  size="5x"
                  color="#DAE1E7"
                  className="interests-icons"
                />
              </div>
              <div>
                <p className="interests-element-title">Animes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
