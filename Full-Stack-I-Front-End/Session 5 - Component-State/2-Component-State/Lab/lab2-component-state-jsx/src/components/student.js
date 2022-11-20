import React from "react";
import Course from "./course";

let createCourses = count => {
  let courses = [];

  for (let i = 0; i < count; i++) {
    courses.push(<Course number={i} />);
  }
  return courses;
};

const Student = props => {
  return (
    <p>
      Student <b>{props.name}</b> with student number <b>{props.number}</b>
      <p>Student is enrolled in {createCourses(props.enrolled)}</p>
    </p>
  );
};

export default Student;
