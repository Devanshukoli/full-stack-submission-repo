import { Fragment } from "react"

const Course = ({ course }) => {
  const nums = course.parts.map((x) => x.exercises)
  const sum = nums.reduce((a, b) => a + b, 0)
  return (
    <>
      <h1>{course.name}</h1>
      <p>{course.parts.map((part) => (
        <Fragment key={part.id}>
          <span>{part.name} {part.exercises
          }</span>
          <br></br>
        </Fragment>
      ))}</p>
      <p>Total: {sum}</p>
    </>
  )
}

export default Course;