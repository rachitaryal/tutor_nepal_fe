import React from "react";
import CourseCard from "../components/CourseCard";

function useRenderFlagged(flagged) {
  let renderFlagged = flagged.map((eachCourse, i) => (
    <CourseCard eachCourse={eachCourse} key={eachCourse.id} />
  ));

  return renderFlagged;
}

export default useRenderFlagged;
