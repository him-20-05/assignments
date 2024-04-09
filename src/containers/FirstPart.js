import React from "react";
import "./FirstPart.css";

export default function FirstPart() {
  return (
    <>
    <div>
    <div className="body-part">
      <div>
        <div>
          <ul className="list-container">
            <li>PROJECTS</li>
            <li>EXPERTISE</li>
            <li>ABOUT US</li>
            <li>PEOPLE</li>
            <li>CAREER</li>
            <li>AU</li>
          </ul>
        </div>
      </div>
      <div className="body-secondpart">
        <p>
          Home/Why work with us
          <span>
            <h1>Headline #1</h1>
          </span>
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="button-container">
      <a href="/" className="previous round">&#8249;</a> &nbsp;
      <a href="/" className="next round">&#8250;</a>
      </div>
    </div>
   </div>
   </>
  );
}
