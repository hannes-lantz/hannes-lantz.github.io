import React from "react";
import logo from "./HL.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-container">
        <h1>Hannes Lantz</h1>
        <div className="Front-img-container">
          <img src={logo} alt="Me" />
        </div>
        <div className="Description">
          <p>
            Civilingenjörsexamen i Datateknik / Master of Science in
            Engineering, Computer Science and Engineering
          </p>
          <p>
            <a href="https://www.lth.se/utbildning/datateknik300/">
              Studied Computer Science
            </a> at <a href="https://www.lu.se/">Lund University</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
