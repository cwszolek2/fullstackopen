import { useState } from 'react'

const Display = (props) => (
  <div>{props.text}</div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodValue = (newValue) => {
    setGood(newValue);
  };

  const setNeutralValue = (newValue) => {
    setNeutral(newValue);
  };

  const setBadValue = (newValue) => {
    setBad(newValue);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" /> 
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display text={"good " + good} />
      <Display text={"neutral " + neutral} />
      <Display text={"bad " + bad} />
    </div>
  );
};

export default App