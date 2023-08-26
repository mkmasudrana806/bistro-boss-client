import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import "./Featured.css";
import img1 from "../../../assets/home/featured.jpg";
import { Container } from "react-bootstrap";
import MenuCover from "../menu/menu/MenuCover";

const Featured = () => {
  return (
    <div>
      <section className="featured-section my-5">
        <Container className="py-5">
          <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Check it Out"}
          ></SectionTitle>
          <div className="d-flex gap-3 w-100 ">
            <img style={{ width: "50%" }} src={img1} alt="" />
            <div className="w-50">
              <span> March 20, 2023</span>
              <p>WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Featured;
