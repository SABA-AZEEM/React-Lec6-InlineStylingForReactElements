import React from "react";
import ReactDOM from "react-dom";

const aboutStyling = {
  color: "green",
  border: "3px solid black"
};

ReactDOM.render(
  <>
    <h1 style={{ color: "red", fontSize: "1.3rem" }}>
      Hello, My name is Saba Azeem
    </h1>
    <h2 style={aboutStyling}>I'm a web Developer</h2>
  </>,
  document.getElementById("root")
);
