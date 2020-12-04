import React from "react";

function LoadingState() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-info p-4 m-4" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h4>Loading...</h4>
      </div>
    </>
  );
}

export default LoadingState;
