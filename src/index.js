import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function CV() {
  return (
    <div className="main">
      <img
        src="https://avatars.githubusercontent.com/u/105670679?v=4"
        align="left" alt=""/>
      <div className="container">
        <h2>Muhammad Usman</h2>
        <p>
          <strong>Address: </strong> Block A, house no 5 xyz..............
        </p>
        <p>
          <strong>Phone num: </strong> 03022522031
        </p>
      </div>
      <h4>Objective:</h4>
      <ul>
        <li>
          To work hard in a challenging and hardworking environment due to
          achive exellence and to prove abilities and talent for the development
          of organization.
        </li>
      </ul>
      <h4>Personal Information:</h4>
      <ul>
        <li>Father name: Muhammad Arshad</li>
        <li>Date of birth: 14 - 10- 2002</li>
        <li>Gender: Male</li>
        <li>Material status: Single</li>
        <li>CNIC: 42...............</li>{" "}
      </ul>
      <h4>Academic Qualification:</h4>
      <ul>
        <li>Metric in Science from BSEK</li>
        <li>Inter in pre-Engineering from BIEK</li>
        <li>Studing BSCS from SMIU</li>
      </ul>
      <h4>Skills:</h4>
      <ul>
        <li>Six months CIT course</li>
        <li>Doing Web and mobile development </li>
      </ul>
      <h4>Reference</h4>
      <ul>
        <li>Will be furnised upon request</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<CV />, document.querySelector("#root"));
