import React from "react";
import { Link } from "react-router-dom";
import C6 from "../../assets/img/carousel/c6.jpg";

function CourseCard(props) {
  const { eachCourse } = props;

  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
      <div className="card">
        <img className="card-img-top" src={C6} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{eachCourse.name}</h4>
          <Link
            type="button"
            to={`/course/${eachCourse.id}`}
            className="stretched-link"
          ></Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
