import React from "react";
import whiteMayka from ".././assets/img/white mayka.jpg";
import Mayka from ".././assets/img/mayka.jpg";
import futbolka from ".././assets/img/futbolka.jpg";
const Carusel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
      <div className="carousel-inner ">
        <div className="carousel-item active d-f justify-content-center" data-bs-interval="10000">
          <img src={futbolka} className="d-block col-4 mx-auto" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Product</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Mayka} className="d-block col-4 mx-auto" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second product</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={whiteMayka} className="d-block col-4 mx-auto" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Product</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carusel;
