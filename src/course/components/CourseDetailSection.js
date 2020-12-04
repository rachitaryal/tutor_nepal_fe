import React from "react";
import C from "../../assets/img/carousel/c6.jpg";

function CourseDetailSection(props) {
  const { courseSelected, renderCourseGradeBtn } = props;
  return (
    <div className="card p-3 my-3 course-detail-section ">
      <div className="row ">
        <div className="col-md-4">
          <img src={C} className="w-100" />
        </div>
        <div className="col-md-8 px-3">
          <div className="card-block px-3">
            <h4 className="card-title">{courseSelected.name}</h4>
            <p className="card-text">{courseSelected.description}</p>
            <p className="card-text">{renderCourseGradeBtn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailSection;
