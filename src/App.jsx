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
  // console.log('total comp. props...', props)

  const sum = props.parts.map((part, index) =>
    <p key={index}>{part.exercises}</p>
  )
  // console.log('sum', sum[0].props.children)
  const sum2 = sum[0].props.children + sum[1].props.children + sum[2].props.children

  return (
    <>
      {sum2}
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
      <Total parts={part} />
    </div>
  )
}

export default App;