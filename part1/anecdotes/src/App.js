import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  //Note: there is a way to dynamically declare points using a for loop, but we'll skip that since that doesn't feel like the focus.
  const randomSelect = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length));
  }
  
  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    // This is a relatively lazy way to handle dealing with the max amount
    // But I thought it was cute since it was another way to use a State to achieve this.
    if(copy[selected] > copy[max]) setMax(selected);
  }
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [max, setMax] = useState(0);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={vote} text="Vote" />
      <Button handleClick={randomSelect} text="Random Anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[max]}</div>
    </div>
  )
}

export default App