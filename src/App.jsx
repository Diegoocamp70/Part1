// App.jsx
import { useState } from 'react';
import Statistics from './Statistics';

const App = () => {
  const [Good, setGoodButtom] = useState(0);
  const [Bad, setBadButtom] = useState(0);
  const [Neutral, setNeutralButtom] = useState(0);
  const [AllReview, setAllReview] = useState([]);

  const GoodButtom = () => {
    setGoodButtom(Good + 1);
    setAllReview(AllReview.concat(1));
  };

  const BadButtom = () => {
    setBadButtom(Bad + 1);
    setAllReview(AllReview.concat(1));
  };

  const NeutralButtom = () => {
    setNeutralButtom(Neutral + 1);
    setAllReview(AllReview.concat(1));
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={GoodButtom}>Good</button>
      <button onClick={BadButtom}>Bad</button>
      <button onClick={NeutralButtom}>Neutral</button>
      <Statistics good={Good} bad={Bad} neutral={Neutral} allReviews={AllReview} />
    </div>
  );
};

export default App;