import React, { useState } from "react";

function CourseTutorSection(props) {
  const {
    renderTutors,
    showAvailableTeacher,
    pageNumberClick,
    next,
    handleNextPrev,
  } = props;

  return showAvailableTeacher ? (
    <div className="container tutor-section">
      <div className="row tutor-heading">
        <h3>Available Teachers</h3>
      </div>
      <div className="row available-tutor-row">{renderTutors}</div>

      {/* pagination seation */}
      <div className="row justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                type="button"
                value="1"
                onClick={pageNumberClick}
              >
                1
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" value="2" onClick={pageNumberClick}>
                2
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" value="3" onClick={pageNumberClick}>
                3
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                value={next}
                onClick={handleNextPrev}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default CourseTutorSection;
