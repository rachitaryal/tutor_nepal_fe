import React from "react";

function GradeBtn(props) {
  const { whenClicked, value, btnName } = props;
  return (
    <>
      <button value={value} className="btn btn-info m-1" onClick={whenClicked}>
        {btnName}
      </button>
    </>
  );
}

export default GradeBtn;
