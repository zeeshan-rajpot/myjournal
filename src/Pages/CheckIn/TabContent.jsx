import React from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

function TabContent({ activeTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case "first":
        return <FirstScreen />;
      case "second":
        return <SecondScreen />;
      case "third":
        return <ThirdScreen />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default TabContent;
