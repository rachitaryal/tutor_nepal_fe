import React, { useState, useEffect } from "react";
import withMainLayout from "../layout/withMainLayout";
import { useParams, Link } from "react-router-dom";
import useAsyncObj from "../global_app/hooks/useAsyncObj";
import useAsyncList from "../global_app/hooks/useAsyncList";
import Axios from "axios";

import CourseDetailSection from "./components/CourseDetailSection";
import GradeBtn from "./components/GradeBtn";
import CourseTutorSection from "./components/CourseTutorSection";
import API from "../global_app/api";
import TutorCards from "./components/TutorCards";

function CourseDV() {
  let { pk } = useParams();
  const COURSE_ID = pk;

  const COURSE_DETAIL_URL = `${API.COURSE_URL}/${COURSE_ID}`;
  const COURSE_GRADE_URL = `${API.COURSE_URL}/course-grade/?course=${pk}`;
  const [courseSelected] = useAsyncObj(COURSE_DETAIL_URL, {});
  const [courseGrade] = useAsyncList(COURSE_GRADE_URL, []);
  const [tutor, setTutor] = useState([]);
  const [showAvailableTeacher, setShowAvailableTeacher] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);

  const pageNumberClick = (e) => {
    console.log("Page_Num: ", e.target.value);
  };

  const handleNextPrev = (e) => {
    console.log("Next/Prev Url: ", e.target.value);
  };

  let numberOfPagesList = [];
  const handleGradeClicked = (e) => {
    console.log(
      "clicked grade_id : ",
      e.target.value + " course_id :",
      pk + " page_no: "
    );
    const course_id = pk;
    const grade_id = e.target.value;
    const TUTOR_COURSE_GRADE_URL = `${API.BASE_URL}/api/tutor/tutor-course-grade/?course=${course_id}&grade=${grade_id}`;
    Axios.get(TUTOR_COURSE_GRADE_URL)
      .then((res) => {
        console.log("Axios Response: ", res);
        setTutor(res.data.results);
        setCount(res.data.count);
        setNext(res.data.next);
        setPrevious(res.data.previous);
        if (res.data.results !== 0) {
          setShowAvailableTeacher(true);
        }
        let len = res.data.results.length;
        console.log("len:", len);
        let total = res.data.count;
        console.log("total:", total);
        let nu = total / len;
        console.log("Num of pages:", nu);

        for (let i = 1; i <= nu; i++) {
          numberOfPagesList.push(i);
        }

        console.log("numberOfPagesList: ", numberOfPagesList);

        setNumberOfPages(nu);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(
    "Current State:\n " + "Count:",
    count + "\nNext:",
    next + "\nPrevious:",
    previous + "\nNum of Pages: ",
    numberOfPages
  );

  let renderCourseGradeBtn = courseGrade.map((each, i) => (
    <GradeBtn
      whenClicked={handleGradeClicked}
      value={each.grade}
      key={each.id}
      btnName={each.grade_name}
    />
  ));

  let renderTutors = tutor.map((eachTutor, i) => {
    // console.log("Tutor object: ", eachTutor.tutor);
    return <TutorCards key={eachTutor.tutor} eachTutor={eachTutor} />;
  });

  return (
    <>
      <CourseDetailSection
        renderCourseGradeBtn={renderCourseGradeBtn}
        courseSelected={courseSelected}
      />
      <CourseTutorSection
        renderTutors={renderTutors}
        showAvailableTeacher={showAvailableTeacher}
        pageNumberClick={pageNumberClick}
        next={next}
        handleNextPrev={handleNextPrev}
      />
    </>
  );
}

export default withMainLayout(CourseDV);
