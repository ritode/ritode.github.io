import React, { useState } from "react";
import Cards from "./Cards";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title h2"
        style={isActive ? { fontWeight: "600" } : { fontWeight: "300" }}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <Cards content={content} />
        </div>
      )}
    </div>
  );
};

export default Accordion;
