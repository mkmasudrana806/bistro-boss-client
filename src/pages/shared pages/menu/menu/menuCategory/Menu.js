import React from "react";
import MenuCover from "../MenuCover";
import img1 from "../../../../../assets/menu/banner3.jpg";
import useMenu from "../../../../../hooks/useMenu";
import { Container } from "react-bootstrap";
import MenuItem from "../../../../../components/menu item/MenuItem";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const pizzas = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      {/* here is the pizzas section */}
      <section>
        <MenuCover
          img={img1}
          content={{
            title: "PIZZA",
            description: "Here is our popular pizza list available",
          }}
        ></MenuCover>
        <Container
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {pizzas.map((item, index) => (
            <MenuItem key={index} menu={item}></MenuItem>
          ))}
        </Container>
        <Link to={`/order/${"pizza"}`} className="btn btn-primary ">
          Order Now
        </Link>
      </section>
      {/* here is the dessert section */}
      <section>
        <MenuCover
          img={img1}
          content={{
            title: "DESSERT",
            description: "Here is our popular DESSERT list available",
          }}
        ></MenuCover>
        <Container
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {desserts.map((item, index) => (
            <MenuItem key={index} menu={item}></MenuItem>
          ))}
        </Container>
        <Link to={`/order/${"order"}`} className="btn btn-primary ">
          Order Now
        </Link>
      </section>
      {/* here is the offered section */}
      <section>
        <MenuCover
          img={img1}
          content={{
            title: "OFFERED COLLECTIONS",
            description: "Here is our popular offered list available",
          }}
        ></MenuCover>
        <Container
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {offered.map((item, index) => (
            <MenuItem key={index} menu={item}></MenuItem>
          ))}
        </Container>
        <Link to={`/order/${"offered"}`} className="btn btn-primary ">
          Order Now
        </Link>
      </section>
      {/* here is the soups section */}
      <section>
        <MenuCover
          img={img1}
          content={{
            title: "SOUP",
            description: "Here is our popular SOUP list available",
          }}
        ></MenuCover>
        <Container
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {soups.map((item, index) => (
            <MenuItem key={index} menu={item}></MenuItem>
          ))}
        </Container>
        <Link to={`/order/${"soup"}`} className="btn btn-primary ">
          Order Now
        </Link>
      </section>
    </div>
  );
};

export default Menu;
