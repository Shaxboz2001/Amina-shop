import React from "react";
import boy from "../../assets/img/boy.jpg";
import boy2 from "../../assets/img/boy 2.jpg";
import Carusel from "../Carusel";
const BestSeller = () => {
  return (
    <div className="container p-5">
      <div className="bestSeller-product d-flex gap-5 mb-5">
        <img src={boy} className="col-6" alt="" />
        <div className="text-container text-uppercase text-secondary d-flex flex-column gap-4">
          <p className="">ARZON VA SIFATLI</p>
          <h2>Bizning mahsulot O'zbekistonda</h2>
          <h2 className="text-dark">
            1995 yildan boshlab o'z hizmatlarini ko'rsatib kelmoqda
          </h2>
          <button className=".btn btn-outline-dark col-7 p-3 px-5">
            Sotib olish
          </button>
        </div>
      </div>
      <div className="bestSeller-product d-flex gap-5 mt-5">
        <div className="text-container pt-5 text-uppercase text-secondary d-flex flex-column gap-4">
          <p className="">QULAY VA IHCHAM</p>
          <h2 className="text-dark">Har bir yoshdagi inson uchun</h2>
          <p className="text-muted">
            7 - 70 yosh gacha bo'lgan futbolkalarni sizga taklif qilgan holda
            sizni va yaqinlaringni huransad qilamiz!
          </p>
          <button className=".btn btn-outline-dark col-5 p-3 px-5">
            Sotib olish
          </button>
        </div>
        <img src={boy2} className="col-4" alt="" />
      </div>
      <Carusel />
    </div>
  );
};

export default BestSeller;
