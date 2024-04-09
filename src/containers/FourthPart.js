import React from "react";
import "./FourthPart.css";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function FourthPart() {
  return (
    <div>
      <div className="background">
        <div className="content-container">
          <img
            src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=gLYLLRv5GX8mz5haKp_yhqa_kAMopZ_0a9nEMDD--xo="
            alt=""
          />
          <div className="text-container">
            <span className="comma">"</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe veniam dolorem, accusantium in vero dolorum eos. Aliquam repellendus fugiat vitae suscipit ut? Et hic assumenda rerum eligendi, quibusdam tenetur?
              
            </p>
            <p>Title</p>
            <p>Name</p>
            <div className="read-more-container">
              <FaCircleArrowRight className="icon" />
              <span className="read-more">Read More</span>
            </div>
          </div>
        </div>
        <div className="button-container">
          <a href="/" className="previous round">
            &#8249;
          </a>{" "}
          &nbsp;
          <a href="/" className="next round">
            &#8250;
          </a>
        </div>
      </div>
    </div>
  );
}
