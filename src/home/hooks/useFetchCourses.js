import React, { useEffect, useState } from "react";
import Axios from "axios";

function useFetchCourses(COURSE_URL, FLAGGED_URL) {
  const [course, setCourse] = useState([]);
  const [flaggedCourse, setFlaggedCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const courses_res = await Axios.get(COURSE_URL);
      const flagged_res = await Axios.get(FLAGGED_URL);
      setCourse(courses_res.data);
      setFlaggedCourse(flagged_res.data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  return [course, flaggedCourse, loading];
}

export default useFetchCourses;
