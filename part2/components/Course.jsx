const Course = ({ course }) => {
  console.log(course.parts)
  return (
    <>
      <h1>{course.name}</h1>
      <p>{course.parts.map((course) => (
        <>
          <span key={course.id}>{course.name} {course.exercises
          }</span>
          <br></br>
        </>
      ))}</p>
    </>
  )
}

export default Course;