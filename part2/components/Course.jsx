import { Fragment } from "react"

const Course = ({ course }) => {

  return (
    <>
      {course.map((singleCourse) => {

        const total = singleCourse.parts.reduce(
          (sum, part) => sum + part.exercises,
          0
        )

        return (
          <Fragment key={singleCourse.id}>

            <h1>{singleCourse.name}</h1>

            {singleCourse.parts.map((part) => (
              <div key={part.id}>
                {part.name} {part.exercises}
              </div>
            ))}

            <p>Total exercises: {total}</p>

          </Fragment>
        )
      })}
    </>
  )
}

export default Course;