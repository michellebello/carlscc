import React from "react";
import carl from "./carl.png";
import "./styles.css";

class BottomPart extends React.Component {
  render() {
    return (
      <div className="bottomPart">
        <div className="rightBox">
          <h1 className="description">CHECK OUT ALL OUR AMAZING PRODUCTS!</h1>
          <div className="rightBoxFlex">
            <ul className="listLeft">
              <li className="itm">T-shirts</li>
              <li className="itm">Water Bottles</li>
              <li className="itm">Bags</li>
              <li className="itm">Keychains</li>
              <li className="itm">Mugs</li>
            </ul>
            <ul className="listRight">
              <li className="itm">Blankets*</li>
              <li className="itm">Caps*</li>
              <li className="itm">Sweatshirts*</li>
              <p className="par">*Only available with Gold Membership Status</p>
            </ul>
          </div>
          <img className="carl" src={carl} alt="carl" />
        </div>
      </div>
    );
  }
}

export default BottomPart;
