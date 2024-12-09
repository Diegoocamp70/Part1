

const Statistics = ({allReviews, good, bad, neutral}) => {
 
    if (allReviews.length > 0) {
    const sum = allReviews.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const average = allReviews.length > 0 ? (sum / allReviews.length).toFixed(2) : 0;
  const percentage = allReviews.length > 0 ? ((good / allReviews.length) * 100).toFixed(2) : 0;
console.log("all reviewe", allReviews)
console.log("good", good)
console.log("bad", bad)
console.log("neutral", neutral)
console.log("sum",sum)
console.log("avarage",average)
console.log("percentage", percentage)
  return (
    <div>
 <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>All Reviews:</td>
            <td>{allReviews.length}</td>
          </tr>
          <tr>
            <td>Sum:</td>
            <td>{sum}</td>
         
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average}</td>
         
         
          </tr>
          <tr>
            <td>Percentage:</td>
            <td>{percentage}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} else {
    return (
        <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
        </div>
    );
  }
};

export default Statistics;