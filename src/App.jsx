const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  // console.log('content props....', props.part)
  const propsList = props.part.map((part, index) =>
    <p key={index}>{part.name}-{part.exercises}</p>
  )
  // console.log('propslilst....', propsList)

  return (
    <>
      {propsList}
    </>
  )
}

const Total = (props) => {

  const sum = props.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <p>Total exercises : {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part} />
      <Total parts={course.part} />
    </div>
  )
}

export default App;