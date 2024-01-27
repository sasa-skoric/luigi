import Image1 from "../assets/11.jpg";
import Image2 from "../assets/16.jpg";
import Image3 from "../assets/13.jpg";
import Image4 from "../assets/14.jpg";
import Image5 from "../assets/15.jpg";
import Image6 from "../assets/12.jpg";

import React from "react";

const ImageGallery = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Image Gallery
      </h2>

      <div className="row">
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img className="img-fluid" src={Image1} alt="img" />
          </div>

          <div className="my-3">
            <img className="img-fluid" src={Image2} alt="img" />
          </div>
        </div>

        <div className="col-md-4 px-2">
          <div className="my-3">
            <img className="img-fluid" src={Image3} alt="img" />
          </div>

          <div className="my-3">
            <img className="img-fluid" src={Image4} alt="img" />
          </div>
        </div>

        <div className="col-md-4 px-2">
          <div className="my-3">
            <img className="img-fluid" src={Image5} alt="img" />
          </div>

          <div className="my-3">
            <img className="img-fluid" src={Image6} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
