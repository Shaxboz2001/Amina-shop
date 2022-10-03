import React from "react";
import futbolki from "../../assets/img/futbolki anm.jpg";
import mayka from "../../assets/img/mayka anm.jpg";
import all from "../../assets/img/all anm.jpg";
const Benefit = () => {
  return (
    <div className="container p-5 bg-black-50">
        <h1 className="text-uppercase text-center">Bizning Afzalliklar</h1>
      <div className="card-container d-flex gap-5  my-5">
        <div className="card  text-center p-3">
          <div className="card-body">
            <img src={futbolki} className="icon-small" alt="" />
            <h4>Aminaning avzaliklari</h4>
            <p className="my-4 text-muted">Qulay va arzon narxlarda. Dastafka hizmati mavjud.</p>
          </div>
        </div>
        <div className="card card-default text-center">
          <div className="card-body">
            <img src={mayka} className="icon-small" alt="" />
            <h4>Qulay va Sifatli</h4>
            <p className="my-4 text-muted">
              Ma'tolari asl materialdan tikilgan bo'lib. kiyish uchun juda
              qulay.
            </p>
          </div>
        </div>
        <div className="card card-default text-center">
          <div className="card-body">
            <img src={all} className="icon-small" alt="" />
            <h4>O'zgacha still</h4>
            <p className="my-4 text-muted">O'ziga hos ko'rimliklik va O'ziga hos alohida still.</p>
          </div>
        </div>
      </div>
      <h3 className="text-center text-muted">Keling va Ko'ring</h3>
    </div>
  );
};

export default Benefit;
