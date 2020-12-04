import React from "react";
import Carousel from "./Carousel";

function CourseCardList(props) {
  const { renderCourseCard, renderFlagged, isSearching } = props;

  return isSearching ? (
    <div className="container section-courses-cards">
      <div className="row">{renderCourseCard}</div>
    </div>
  ) : (
    <div className="container section-courses-cards">
      <div className="row">{renderFlagged}</div>
    </div>
  );
}

export default CourseCardList;
