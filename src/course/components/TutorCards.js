import React from "react";
import C from "../../assets/img/carousel/c3.jpg";
import { Link } from "react-router-dom";

function TutorCards(props) {
  const { eachTutor } = props;
  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-3">
        <div className="card card-tutor">
          <img className="card-img-top" src={C} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{eachTutor.tutor_name}</h4>
            <p>{eachTutor.tutor_info}</p>
            <Link type="button" to={`#`} className="stretched-link"></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorCards;
