import React from "react";

import NavBar from "./NavBar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Education />
      <Skills />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
