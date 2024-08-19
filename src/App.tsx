import "./App.css";
import Card from "./components/card/card.component";
import NavBar from "./components/navbar/navbar.component";

import jslogo from "/public/logos/logo-javascript.svg";
import csslogo from "/public/logos/css-3.svg";
import htmllogo from "/public/logos/html-1.svg";
import angularlogo from "/public/logos/angular-icon-1.svg";
import nodelogo from "/public/logos/nodejs-icon.svg";
import { useState } from "react";

function App() {
  const [offset, setOffset] = useState<number>(0);
  const add = 10;

  return (
    <>
      <NavBar />
      <div className="app">
        <div className="second-block"></div>
        <div className="first-block"></div>
        <div className="arrows-block">
          <button
            type="button"
            onClick={() => setOffset(offset <= 0 ? 0 : offset - add)}
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => setOffset(offset >= 30 ? 30 : offset + add)}
          >
            &rarr;
          </button>
        </div>
        <h1>Programming courses</h1>
        <p>
          Learn to code with an easy to understand project based learning path
        </p>
        <button type="button" className="button">
          Browse courses
        </button>
        <div
          className="dashboard"
          style={{ transform: `translateX(-${offset}vw)` }}
        >
          <Card
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            name="React"
            courses={14}
            teachers={3}
          />
          <Card src={jslogo} name="Javascript" courses={37} teachers={6} />
          <Card src={angularlogo} name="Angular" courses={14} teachers={3} />
          <Card src={csslogo} name="CSS" courses={14} teachers={3} />
          <Card src={htmllogo} name="HTML" courses={37} teachers={6} />
          <Card src={nodelogo} name="NodeJs" courses={37} teachers={6} />
        </div>
      </div>
    </>
  );
}

export default App;
