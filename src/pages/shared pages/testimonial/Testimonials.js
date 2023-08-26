import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container className="">
      <section>
        <SectionTitle
          subHeading={"What Our Client Say"}
          heading={"Testimonial"}
        ></SectionTitle>
      </section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review._id}>
              <div className="d-flex flex-column align-items-center">
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
                <p>{review.details}</p>
                <h3>{review.name}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
