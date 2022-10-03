import React from "react";
import logoImgUrl from "./../../assets/img/logo.jpg";
import "./navbar.css"
const Navbar = () => {
  return (
    <header className="header-li">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logoImgUrl} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Amina nima ?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Narxlar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#!">
                  Til
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Yordam
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Mahsulotni qidirish..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Qidiruv
              </button>
              <button className="btn btn-outline-primary" type="submit">
                Kirish
              </button>
              <button className="btn btn-outline-dark" type="submit">
                Ro'yxatdan o'tish
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
