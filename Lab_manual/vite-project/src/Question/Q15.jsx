import React from "react";

function Dashboard() {

  const studentName = "Samir";
  const studentAge = 21;

  const courseName = "MCA";
  const courseDuration = "1 Years";

  const totalMarks = 500;
  const obtainedMarks = 424;

  return (
    <>
      <h1>Student Dashboard</h1>

      <StudentInfo name={studentName} age={studentAge} />
      <CourseInfo course={courseName} duration={courseDuration} />
      <ResultInfo total={totalMarks} obtained={obtainedMarks} />
    </>
  );
}

// 2️⃣ Sub Component 1
function StudentInfo(props) {
  return (
    <>
      <h2>Student Information</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </>
  );
}

// 3️⃣ Sub Component 2
function CourseInfo(props) {
  return (
    <>
      <h2>Course Information</h2>
      <p>Course Name: {props.course}</p>
      <p>Duration: {props.duration}</p>
    </>
  );
}

// 4️⃣ Sub Component 3
function ResultInfo(props) {
  return (
    <>
      <h2>Result Information</h2>
      <p>Total Marks: {props.total}</p>
      <p>Obtained Marks: {props.obtained}</p>
    </>
  );
}

export default Dashboard