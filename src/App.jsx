import React from "react";
import "./App.css";

// Import components
import Aipos2 from "./components/Aipos2/Aipos2";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Monitor from "./components/Monitor/Monitor";
import Monitor2 from "./components/Monitor2/Monitor2";
import Automate from "./components/Automate/Automate";

const App = () => {
  return (
    <>
      <Aipos2 />
      <Section1 />
      <Section2 />
      <Monitor />
      <Monitor2 />
      <Automate />
    </>
  );
};

export default App;
