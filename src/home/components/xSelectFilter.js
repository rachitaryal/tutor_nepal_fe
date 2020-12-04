import React, { useState, useEffect } from "react";
import Select from "react-select";
import Axios from "axios";

function SelectFilterV(props) {
  const gradeoptions = [
    { value: "EIGHT", label: "Grade 8" },
    { value: "NINE", label: "Grade 9" },
    { value: "TEN", label: "Grade 10" },
    { value: "ELEVEN", label: "Grade 11" },
    { value: "TWELVE", label: "Grade 12" },
    { value: "BACHELORS", label: "Bachelors" },
  ];

  const [grade, setGrade] = useState({});
  const [courses, setCourses] = useState([]);
  const [courseSelected, setCourseSelected] = useState({});

  let coursesOptions = [];
  if (courses && grade) {
    courses.map((each) => {
      coursesOptions.push({ value: each.id, label: each.name });
    });
  }

  const selectGrade = (value) => {
    setGrade(value);
    const url = `http://localhost:8000/api/course/?grade=${value.value}`;
    Axios.get(url)
      .then((res) => {
        console.log(res);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log("an error has occured while fetching grade...");
        console.log(err);
      });
  };

  const selectCourse = (value) => {
    const url = `http://localhost:8000/api/course/?grade=${grade.value}&&course_id=${value.value}`;
    Axios.get(url)
      .then((res) => {
        setCourseSelected(res.data[0]);
        props.onChange(grade, res.data[0]);
      })
      .catch((err) => {
        console.log(
          "an error has occured while fetching grade and course_id..."
        );
        console.log(err);
      });
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <div className="filterbar">
            <Select
              className="grade"
              classNamePrefix="grade"
              options={gradeoptions}
              placeholder={"Select Grade..."}
              onChange={selectGrade}
            />
            <Select
              className="course"
              classNamePrefix="course"
              placeholder="Select Course..."
              options={coursesOptions}
              onChange={selectCourse}
              noOptionsMessage={() => "No Options"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectFilterV;
