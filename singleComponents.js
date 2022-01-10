import React from "react";
import profile1 from "./img/images.jpg";

const SingleCommend = (props) => {
  return (
    <div className="ui comments ">
      <div className="comment">
        <a href="#" className="avatar">
          <img src={props.img} alt="profile" />
        </a>
        <div className="content">
          <a href="#" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.commend}</div>
        </div>
      </div>
    </div>
  );
};






export default SingleCommend;
