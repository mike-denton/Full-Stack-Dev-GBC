import React from "react";

const Student = ({ match }) => {
  const { studentname, studentno } = match.params;
  const studentNoTxt = studentno ? `The student no is ${studentno}` : ``;
  return (
    <div>
      <p>Student</p>
      <div>
        <div>{`The student name is "${studentname}"!`}</div>
        <div>{studentNoTxt}</div>
      </div>
    </div>
  );
};

export default Student;
