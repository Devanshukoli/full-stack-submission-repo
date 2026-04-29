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

const App = () => {
  const course = 'Half Stack application development'

  const part = [
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


  return (
    <div>
      <Header course={course} />
      <Content part={part} />
    </div>
  )
}

export default App;