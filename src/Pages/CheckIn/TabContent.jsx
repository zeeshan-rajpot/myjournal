import React from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

function TabContent({ activeTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case "first":
        return <FirstScreen title="First-screen Content" />;
      case "second":
        return <SecondScreen title="Second-screen Content" />;
      case "third":
        return <ThirdScreen title="Third-screen Content" />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default TabContent;
