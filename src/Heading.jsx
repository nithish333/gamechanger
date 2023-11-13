import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h1
        style={{
          fontSize: "3rem",
          lineHeight: "0.6",
          margin: "3rem 0",
          color: "#059669",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
