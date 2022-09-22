import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const StatisticLine = (props) => {
  if(props.text === "positive") {
    return (
      <tr>
        <td>{props.text} {props.value}%</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{props.text} {props.value}</td>
      </tr>
    )
  }
}

const Statistics = (props) => {
  const total = props.reviews.good + props.reviews.neutral + props.reviews.bad;
  const average = (props.reviews.good * 1 + props.reviews.neutral * 0 + props.reviews.bad * -1) / total;
  const positive = (props.reviews.good + props.reviews.neutral) / total * 100;

  if(total < 1) 
    return (
      <div>No feedback given</div>
    );
  else 
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.reviews.good} />
          <StatisticLine text="neutral" value={props.reviews.neutral} />
          <StatisticLine text="bad" value={props.reviews.bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    );
}

const App = () => {
  // save clicks of each button to its own state
  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const setGoodValue = (newValue) => {
    setReviews({ ...reviews, good: newValue})
  };

  const setNeutralValue = (newValue) => {
    setReviews({ ...reviews, neutral: newValue})
  };

  const setBadValue = (newValue) => {
    setReviews({ ...reviews, bad: newValue})
  };

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setGoodValue(reviews.good + 1)} text="good" /> 
      <Button handleClick={() => setNeutralValue(reviews.neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(reviews.bad + 1)} text="bad" />
      <Header text="statistics"/>
      <Statistics reviews={reviews} />
    </div>
  );
};

export default App