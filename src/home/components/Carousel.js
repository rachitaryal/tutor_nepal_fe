import React from "react";
import C1 from "../../assets/img/carousel/c1.png";
import C2 from "../../assets/img/carousel/c2.jpg";
import C3 from "../../assets/img/carousel/c3.jpg";
import C4 from "../../assets/img/carousel/c4.jpg";
import C5 from "../../assets/img/carousel/c5.jpg";
import C6 from "../../assets/img/carousel/c6.jpg";

function Carousel() {
  return (
    <div className="corousel-row row">
      <div className="col-md-12">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={C4} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={C5} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={C6} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
