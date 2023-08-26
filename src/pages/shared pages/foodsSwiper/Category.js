import "./Category.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
import { Pagination } from "swiper/modules";

import img2 from "../../../assets/menu/dessert-bg.jpeg";

import img4 from "../../../assets/menu/pizza-bg.jpg";
import img5 from "../../../assets/menu/salad-bg.jpg";
import img6 from "../../../assets/menu/soup-bg.jpg";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Container>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="category-label">Pizza</h3>
          </SwiperSlide>

          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className="category-label">Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="category-label">Dessert</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
            <h3 className="category-label">Soup</h3>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Category;
