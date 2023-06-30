import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Explore = [
  {
    id: 1,
    link: "/images/e1.jpg",
    category: "QUEEN CLASSIC",
    info: "This category provide you will the comfort you needed to pass the night",
    price: "15,000 / Night",
  },
  {
    id: 2,
    link: "/images/uni17.jpg",
    category: "ROYAL DOUBLE",
    info: "This offers you the opportunity to have a nice time with you and your partner as this is bigger than the first category",
    price: "25,000 / Night",
  },
  {
    id: 3,
    link: "/images/uni3.jpg",
    category: "SUPERIOR DOUBLE",
    info: "This category provide you with the luxury you needed in a five star hotel.",
    price: "35,000 / Night",
  },
];
const Images = [
  {
    id: 1,
    link: "/images/e1.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 2,
    link: "/images/e2.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 3,
    link: "/images/e4.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 4,
    link: "/images/n1.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 5,
    link: "/images/n2.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 6,
    link: "/images/n3.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 7,
    link: "/images/n4.jpg",
    category: "QUEEN CLASSIC",
  },
  {
    id: 8,
    link: "/images/n5.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 9,
    link: "/images/n6.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 10,
    link: "/images/n7.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 11,
    link: "/images/n8.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 12,
    link: "/images/uni17.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 13,
    link: "/images/n10.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 14,
    link: "/images/n11.jpg",
    category: "ROYAL DOUBLE",
  },
  {
    id: 15,
    link: "/images/n12.jpg",
    category: "SUPERIOR DOUBLE",
  },
  {
    id: 16,
    link: "/images/uni6.jpg",
    category: "SUPERIOR DOUBLE",
  },
  {
    id: 17,
    link: "/images/uni1.jpg",
    category: "SUPERIOR DOUBLE",
  },
  {
    id: 18,
    link: "/images/uni3.jpg",
    category: "SUPERIOR DOUBLE",
  },
  {
    id: 19,
    link: "/images/uni4.jpg",
    category: "SUPERIOR DOUBLE",
  },
  {
    id: 20,
    link: "/images/uni13.jpg",
    category: "SUPERIOR DOUBLE",
  },
  {
    id: 21,
    link: "/images/uni15.jpg",
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

const Home = () => {
  return (
    <div className="my-16 md:mx-12 lg:mx-28">
      <div className="px-2">
        <Slide>
          {Images.map(({ id, link, category }) => (
            <div key={id}>
              <div style={{ ...divStyle, backgroundImage: `url(${link})` }}>
                <span style={spanStyle}>{category}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="flex flex-col mt-5 justify-between items-center">
        <h1 className="uppercase text-center text-2xl md:text-3xl lg:5xl font-bold text-greenish">
          Welcome to Mandana Hotels <br />
          Ado-Ekiti
        </h1>
        <img src="/images/logo-bg.png" alt="hotel logo" className="w-52" />
      </div>
      <div>
        <p className="mb-12 mx-4">
          At Mandana Hotels, we take good care of our customers right from the
          entrance of our company till the time you take your leave.
        </p>
        <img src="" alt="" />
        <div className="md:text-2xl">
          <p className="font-bold text-customGold mx-4 capitalize md:text-2xl italic">
            let us give you a special treat
          </p>
          <p className="my-2 mx-4">
            Mandana Hotels is located along University road in the beautiful
            city of Ado-Ekiti. Putting in mind our customers, Mandana Hotels
            design its services to give our customers maximum satisfaction. We
            strive to make your stay memorable and enjoyable.
          </p>

          <p className="mt-12 mx-4 font-bold text-customGold capitalize md:text-2xl italic">
            State of the Heart Facilities
          </p>
          <p className="my-2 mx-4">
            In our Hotel, we have exceptional rooms that are designed primarily
            to provide utmost comfort and luxury that will make you feel at
            home. Our customer friendly workers are always at your service just
            to make your stay with us a memorable one.
          </p>
        </div>
      </div>
      <p className="uppercase text-center mt-6 font-bold text-2xl">
        Explore our rooms
      </p>
      <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {Explore.map(({ id, link, category, info, price }) => (
          <div>
            <img
              src={link}
              alt={id}
              className="w-screen px-4 overflow-hidden flex-nowrap h-[300px]  image-rendering: pixelated; mt-10"
            />
            <p className="mx-3 text-custom font-bold">{category}</p>
            <p className="ml-3 italic">{info}</p>
            <p className="mx-3 font-semibold text-customGold">#{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
