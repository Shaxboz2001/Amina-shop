import React from "react";
import firstImg from "../../assets/img/3 boy in 1 rll.png";
import secondImg from "../../assets/img/black ma.jpg";
import thirdImg from "../../assets/img/boshqacha futbolka rll.png";
import fourthImg from "../../assets/img/boshqacha futbolka.jpg";
import fivethImg from "../../assets/img/boy 2.jpg";
import sixthImg from "../../assets/img/boy.jpg";
import seventhImg from "../../assets/img/colourly .jpg";
import eightthImg from "../../assets/img/colourly rl.jpg";
import "./product.css";
const productsInfo = [
  {
    name: "3 boy",
    srcImg: firstImg,
  },
  {
    name: "black ma",
    srcImg: secondImg,
  },
  {
    name: "boshqacha",
    srcImg: thirdImg,
  },
  {
    name: "boshqacha 2",
    srcImg: fourthImg,
  },
  {
    name: "boy 2",
    srcImg: fivethImg,
  },
  {
    name: "boy",
    srcImg: sixthImg,
  },
  {
    name: "colourly",
    srcImg: seventhImg,
  },
  {
    name: "colourly rl",
    srcImg: eightthImg,
  },
];
const Product = () => {
  return (
    <div className="container products-section text-light  text-center mt-5 pt-3">
      <h1>Bizning Mahsulotlar</h1>
      <form className="d-flex justify-content-center w-100 mt-3">
        <input
          className=""
          type="search"
          placeholder="Mahsulotni qidirish..."
          aria-label="Search"
        />
        <select class="" aria-label="Default select example">
          <option selected>Kategoriyani tanlang...</option>
          <option value="1">Mayka</option>
          <option value="2">Futbolka</option>
          <option value="3">Boshqa</option>
        </select>
        <button className="btn btn-outline-success" type="submit">
          Qidiruv
        </button>
      </form>
      <div className="products-cards text-dark container  d-f ">
        {productsInfo.map((product, index) => (
          <div
            key={index}
            className="card bg-outline-dark rounded-30 text-center p-4"
          >
            <h1 className="card-header rounded mb-2">{product.name}</h1>
            <img src={product.srcImg} alt="product img" />
            <button className="btn btn-outline-danger w-80% mt-3">
              Sotib olish{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
