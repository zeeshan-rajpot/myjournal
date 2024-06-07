import React from "react";
import Goals from "./Goals";
import Elevate from "./Elevate";
import Motivation from "./Motivation";

function TabContent({ activeTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case "first":
        return <Goals title="Goals Content" />;
      case "second":
        return <Elevate title="Second-screen Content" />;
      case "third":
        return <Motivation title="Motivation Content" />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default TabContent;
