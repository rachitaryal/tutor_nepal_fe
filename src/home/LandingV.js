import React from "react";
import withMainLayout from "../layout/withMainLayout";
import SeachInput from "./components/SearchInput";
import CourseCardList from "./components/CourseCardList";
import useFetchCourses from "./hooks/useFetchCourses";
import useSearchCourse from "./hooks/useSearchCourse";
import useRenderCourseCard from "./hooks/useRenderCourseCard";
import useRenderFlagged from "./hooks/useRenderFlagged";
import LoadingState from "../global_app/components/LoadingState";
import API from "../global_app/api";

function LandingV() {
  // custom hook to handle handleSearch and check isSearching
  const [search, isSearching, handleSearch] = useSearchCourse();

  // custom hook to handle course fetch and loading state
  const [course, flaggedCourse, loading] = useFetchCourses(
    API.COURSE_URL,
    API.FLAGGED_URL
  );

  //returns course cards based on search
  let renderCourseCard = useRenderCourseCard(course, search);

  //returns flagged course cards for init
  let renderFlagged = useRenderFlagged(flaggedCourse);

  return loading ? (
    <LoadingState />
  ) : (
    <>
      <div className="row row-search-input-alt">
        <SeachInput onSearch={handleSearch} />
      </div>
      <CourseCardList
        renderCourseCard={renderCourseCard}
        renderFlagged={renderFlagged}
        isSearching={isSearching}
      />
    </>
  );
}

export default withMainLayout(LandingV);
