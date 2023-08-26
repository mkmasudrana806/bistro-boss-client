import React from "react";

const MenuItem = ({ menu }) => {
  const { category, image, name, price, recipe, _id } = menu;
  return (
    <div className="d-flex gap-2">
      <img
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "0px 25px 2px 30px",
        }}
        src={image}
        alt=""
      />
      <div>
        <h3>{name} --------</h3>
        <p>{recipe}</p>
      </div>
      <strong>
        {" "}
        <p style={{ color: "orange" }}>${price}</p>
      </strong>
    </div>
  );
};

export default MenuItem;
