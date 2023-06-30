import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Slide } from "react-slideshow-image";

const Images = [
  {
    id: 1,
    link: "/images/e1.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 2,
    link: "/images/e2.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 3,
    link: "/images/e4.jpg",
    category: "SUPERIOR DOUBLE",
  },
];
const spanStyle = {
  padding: "20px",
  background: "#d9b271",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const About = () => {
  return (
    <div className="p-6">
      <Fade>
        {Images.map(({ id, link, category }) => (
          <div key={id} style={divStyle} className="flex flex-col items-center">
            <img src={link} alt={id} />
          </div>
        ))}
      </Fade>
      <div className="md:mx-12 lg:mx-28">
        <p className="my-12">
          Welcome to Mandana Hotels, a haven of luxury nestled in the
          picturesque city of Ado Ekiti. As a premier five-star hotel, we pride
          ourselves on providing an exceptional hospitality experience that
          surpasses all expectations.
        </p>

        <div className="flex justify-around mx-4 gap-x-4">
          <img
            src="./images/p11.jpg"
            alt="hotel"
            className="w-[50%] object-cover"
          />
          <img
            src="./images/p7.webp"
            alt="hotel"
            className="w-[50%] object-cover"
          />
        </div>

        <p className="my-12">
          From our stylish accommodations to our impeccable service, every
          aspect of your stay with us is designed to create cherished memories
          that will last a lifetime. At Mandana Hotels, we believe in the power
          of attention to detail. Our elegantly appointed rooms and suites offer
          a tranquil retreat, complete with modern amenities and tasteful decor.
          Whether you're here for business or pleasure, our dedicated staff is
          committed to ensuring your comfort and satisfaction throughout your
          stay.
        </p>

        <h2 className="font-bold text-2xl italic mt-4">
          Come and discover the epitome of luxury and hospitality at Mandana
          Hotels, where your comfort and satisfaction are our utmost priorities.
        </h2>
      </div>
    </div>
  );
};

export default About;
