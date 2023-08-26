import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../components/menu item/MenuItem";
import { Container } from "react-bootstrap";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  let popularItems = [];
  if (!loading) {
    popularItems = menu.filter((item) => item.category === "popular");
  }
  
  return (
    <section>
      <SectionTitle
        heading={"Popular Items"}
        subHeading={"From Our Menu"}
      ></SectionTitle>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {popularItems.map((item, index) => (
          <MenuItem key={index} menu={item}></MenuItem>
        ))}
      </Container>
    </section>
  );
};

export default PopularMenu;
