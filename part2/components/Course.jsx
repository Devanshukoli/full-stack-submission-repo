const Course = ({ course }) => {
  const nums = course.parts.map((x) => x.exercises)
  const sum = nums.reduce((a, b) => a + b, 0)
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
      <p>Total: {sum}</p>
    </>
  )
}

export default Course;