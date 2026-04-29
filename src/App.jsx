const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
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
    </div>
  )
}

export default App;