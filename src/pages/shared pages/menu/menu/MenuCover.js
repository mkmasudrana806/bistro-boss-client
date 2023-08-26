import React from "react";
import "./MenuCover.css";

const MenuCover = ({ img, content }) => {
  const divStyle = {
    backgroundImage: `url(${img})`,
    position: "relative",
    width: "100%",
    height: " 500px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="custom-component">
      <div className="content d-flex justify-content-center align p-5">
        <div>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCover;
