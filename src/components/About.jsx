import React from "react";

import "./about.css";

import Me from "./part components/Me.jsx";
import MeIntroduction from "./part components/MeIntroduction.jsx";

export default function About() {
  return (
    <section className="about-section" id="about">
      <Me />
      <MeIntroduction />
    </section>
  );
}
