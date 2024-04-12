import React from "react";
import TopPart from "./MainPageComps/TopPart";
import BottomPart from "./MainPageComps/BottomPart";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <TopPart />
        <BottomPart />
      </div>
    );
  }
}

export default MainPage;
