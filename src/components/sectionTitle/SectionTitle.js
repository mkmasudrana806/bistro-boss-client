import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-5 mt-2">
      <div
        style={{
          width: "300px",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <p className="sub-heading text-warning">------ {subHeading} ------</p>
        <hr className="m-1" />
        <h3 className="heading">{heading}</h3>
        <hr className="m-1" />
      </div>
    </div>
  );
};

export default SectionTitle;
