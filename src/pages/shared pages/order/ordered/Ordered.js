import React, { useState } from "react";
import orderCover from "../../../../assets/shop/banner2.jpg";
import MenuCover from "../../menu/menu/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../../hooks/useMenu";
import FoodCart from "../../../../components/food cart/FoodCart";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Ordered = () => {
  const categories = ["pizza", "soup", "dessert"];
  const { category } = useParams();
  const initialIndext = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndext);
  const [menu] = useMenu();
  console.log(category);
  console.log(initialIndext);

  const pizzas = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <MenuCover
        img={orderCover}
        content={{ title: "Our Shop", description: "Order our awesome food" }}
      ></MenuCover>
      <section>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
          </TabList>
          <TabPanel>
            <Container>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "20px",
                }}
              >
                {pizzas.map((item) => (
                  <FoodCart item={item} key={item._id}></FoodCart>
                ))}
              </div>
            </Container>
          </TabPanel>
          <TabPanel>
            <Container>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "20px",
                }}
              >
                {soups.map((item) => (
                  <FoodCart item={item} key={item._id}></FoodCart>
                ))}
              </div>
            </Container>
          </TabPanel>
          <TabPanel>
            <Container>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "20px",
                }}
              >
                {desserts.map((item) => (
                  <FoodCart item={item} key={item._id}></FoodCart>
                ))}
              </div>
            </Container>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Ordered;
