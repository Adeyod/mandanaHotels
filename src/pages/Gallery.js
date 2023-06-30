import React from "react";

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

const Gallery = () => {
  return (
    <div>
      <p className="text-5xl text-center uppercase underline my-6">Gallery</p>
      <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {Images.map(({ id, link, category }) => (
          <div>
            <img
              src={link}
              alt={id}
              className="w-screen px-4 pt-4 overflow-hidden flex-nowrap h-[300px]  image-rendering: pixelated; mt-10"
            />

            <p className=" px-4 text-2xl font-bold">
              Suite Name:
              <span className=" text-customGold px-2">{category}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
