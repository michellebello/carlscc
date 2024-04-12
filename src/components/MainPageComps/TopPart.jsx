import React from "react";
import Buttons from "./Buttons.jsx";
import "./styles.css";

class TopPart extends React.Component {
  render() {
    return (
      <div className="topPart">
        <h1 className="title">WELCOME TO CARL'S COLLECTIBLE CORNER!</h1>
        <div className="topFlex">
          <div className="right">
            <Buttons linkTo="login">I already have an account</Buttons>
          </div>
          <div className="left">
            <Buttons linkTo="register">I want to create an account</Buttons>
          </div>
        </div>
      </div>
    );
  }
}

export default TopPart;
