import React from "react";
import Course from "./course";

let createCourses = count => {
  let courses = [];
   if(count == 0) return
  for (let i = 0; i < count; i++) {
    courses.push(<Course number={i} />);
  }
  return courses;
};

const Student = props => {

  let courses = createCourses(props.enrolled)
  return (
    <p>
      Student <b>{props.name}</b> with student number <b>{props.number}</b>
      props.enrolled ? <p>Student is enrolled in { courses }</p> : <></>
    </p>
  );
};

export default Student;
