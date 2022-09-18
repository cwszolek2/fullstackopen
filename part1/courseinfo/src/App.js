const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
/*
  function InfoRow(part, exercises) {
    this.part = part;
    this.exercises = exercises;
  }
  
  const infoRow1 = new InfoRow(part1.name, part1.exercises);
  const infoRow2 = new InfoRow(part2.name, part2.exercises);
  const infoRow3 = new InfoRow(part3.name, part3.exercises);

  const infoArr = [infoRow1, infoRow2, infoRow3];
*/

  // I want to do a foreach for each item in the array, but i can't?  idk how.  So, the prior work is unimportant
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
      <>
        <p>
          {props.parts[0].name} {props.parts[0].exercises}
        </p>
        <p>
          {props.parts[1].name} {props.parts[1].exercises}
        </p>
        <p>
          {props.parts[2].name} {props.parts[2].exercises}
        </p>
      </>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((a,b) => a + b.exercises, 0);
  return (
    <>
      <p>
        Number of exercises {total}
      </p>
    </>
  )
}




export default App