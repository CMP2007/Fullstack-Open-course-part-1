
const Header = (props)=>{
  return(
    <header>
    <h1>{props.course.name}</h1>
    </header>
  )
}

const Part1 = (props)=>{
  return(
    <p>{props.part1} {props.exercises1}</p>
  )
}

const Part2 = (props)=>{
  return(
    <p>{props.part2} {props.exercises2}</p>
  )
}

const Part3 = (props)=>{
  return(
    <p>{props.part3} {props.exercises3}</p>
  )
}

const Content  = (props)=>{  
  return(
    <article>
      <Part1 part1 = {props.course.parts[0].name} exercises1 = {props.course.parts[0].exercises1} />
      <Part2 part2 = {props.course.parts[1].name} exercises2 = {props.course.parts[1].exercises2} />
      <Part3 part3 = {props.course.parts[2].name} exercises3 = {props.course.parts[2].exercises3} />
    </article>
  )
}

const Footer = (props)=>{  
  return(
    <footer>
      <p>Number of exercises {props.course.parts[0].exercises1 + props.course.parts[1].exercises2 + props.course.parts[2].exercises3}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises1: 10
      },
      {
        name: 'Using props to pass data',
        exercises2: 7
      },
      {
        name: 'State of a component',
        exercises3: 14
      }
    ]
  }
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course} />
    </>
  )
}

export default App