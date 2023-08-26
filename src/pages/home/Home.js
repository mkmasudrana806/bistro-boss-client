import React from "react";
import Banner from "./Banner";
import Category from "../shared pages/foodsSwiper/Category";
import PopularMenu from "../shared pages/popularMenu/PopularMenu";
import Featured from "../shared pages/fetured/Featured";
import Testimonials from "../shared pages/testimonial/Testimonials";
import { Helmet } from "react-helmet-async";
import MenuCover from "../shared pages/menu/menu/MenuCover";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
