import "./Home.css";

import Img1 from "../../assets/17.jpg";
import ContactImg from "../../assets/21.png";

import MenuBtn from "../../components/MenuBtn";
import ImageGallery from "../../components/ImageGallery";
import ContactInfo from "../../components/ContactInfo";

const Home = () => {
  return (
    <div className="home_page">
      <header className="  d-flex align-items-center text-light shadow ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center ">
              <h2 className=" mb-0 text-black fw-bold">Welcome to</h2>
              <h1 className="mb-4 fw-bold text-success text-center text-sm-start">
                LuiGi
              </h1>
              <MenuBtn
                btnType={`btn-outline-success`}
                link={`/luigi_restaurant_react_bootstrap/menu`}
                text={`Our Menu`}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5 ">
        <div className=" row">
          <div className=" col-lg-6 d-flex justify-content-center d-lg-flex pb-4">
            <img
              loading="lazy"
              className=" img-fluid w-50"
              src={Img1}
              alt="img"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className=" fs-1 mb-4 text-uppercase fw-bold">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              accusantium! A nobis pariatur nulla neque animi debitis. Doloribus
              tempore sapiente facere nobis!
            </p>

            <p className="mb-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              consectetur saepe beatae quis ducimus necessitatibus soluta, minus
              ab repellendus ipsum tenetur esse, porro dolorem odit! Maxime,
              mollitia nulla?
            </p>

            <MenuBtn
              btnType={`btn-outline-success`}
              link={`/luigi_restaurant_react_bootstrap/about`}
              text={`More About Us`}
            />
          </div>
        </div>
      </div>

      <div className="menu_section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favorites</h2>

          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Food</h3>
              <ul className="px-0">
                <li className=" d-flex justify-content-between">
                  <p className="fs-3 fw-semibold mx-2">English Breakfast</p>

                  <p className="price fs-3 mx-2 text-success fw-bold">$12</p>
                </li>

                <li className=" d-flex justify-content-between">
                  <p className="fs-3 fw-semibold  mx-2">Spicy Beef</p>

                  <p className="price fs-3 mx-2 text-success fw-bold">$15</p>
                </li>

                <li className=" d-flex justify-content-between">
                  <p className="fs-3 fw-semibold  mx-2">Spaghetti Bolognese</p>

                  <p className="price fs-3 mx-2 text-success fw-bold">$11</p>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0">
              <h3 className="fs-2 mb-5">Drinks</h3>
              <ul className="px-0">
                <li className=" d-flex justify-content-between">
                  <p className="fs-3 fw-semibold  mx-2">Coffee</p>

                  <p className="price fs-3 mx-2 text-success fw-bold">$4</p>
                </li>

                <li className=" d-flex justify-content-between">
                  <p className="fs-3 fw-semibold  mx-2">Fresh Juice</p>

                  <p className="price fs-3 mx-2 text-success fw-bold">$7</p>
                </li>

                <li className=" d-flex justify-content-between">
                  <p className="fs-3 fw-semibold  mx-2">Spirits</p>

                  <p className="price fs-3 mx-2 text-success fw-bold">$5</p>
                </li>
              </ul>
            </div>
          </div>

          <MenuBtn
            btnType={`btn-success`}
            link={`/luigi_restaurant_react_bootstrap/menu`}
            text={`Full Menu`}
          />
        </div>
      </div>

      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>

            <div className="col-lg-6 d-flex  justify-content-center">
              <img
                className=" img-fluid "
                loading="lazy"
                src={ContactImg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
