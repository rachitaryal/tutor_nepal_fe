import React from "react";
import CourseCard from "../components/CourseCard";

function useRenderCourseCard(course, search) {
  let renderCourseCard = course
    .filter((each) => each.name.toLowerCase().includes(search.toLowerCase()))
    .map((eachCourse, i) => (
      <CourseCard eachCourse={eachCourse} key={eachCourse.id} />
    ));

  return renderCourseCard;
}

export default useRenderCourseCard;
