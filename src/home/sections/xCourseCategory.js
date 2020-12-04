import React from "react";
import C1 from "../../assets/img/carousel/c1.png";
import C2 from "../../assets/img/carousel/c2.jpg";
import C3 from "../../assets/img/carousel/c3.jpg";

function CourseCategory(props) {
  return (
    <>
      <div className="row section-courses-category justify-content-md-between ">
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={C1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.course.name}</h5>
              <p className="card-text">
                {props.grade.label}Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={C2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Mathematics</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={C3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Biology</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={C1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Physics</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCategory;
