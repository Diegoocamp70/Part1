import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
// lo que hace es que me maneja los votos de las anecdotas por medio de un array y lo actualizamos su estado por medio de una copia del mismo
  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log("copy",copy)
  }

  const maxVotes = Math.max(...votes) // me da el valor maximo de los votos
  const points = votes[selected]
// lo que hace es generalee aleatoriamente un numero entero entre 0 y la longitud del array de anecdotas
  const handleClick = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length); 
    setSelected(randomInt)  
    
  }
console.log("votess",points)

  return (
    <div>
       
      <h1>Anecdote of the day</h1>
      <button onClick={handleClick}>Next anecdotes</button> 
     
      {anecdotes[selected]}
      <button onClick={handleVotes}>Vote</button>   
      <p> Votes: {points} </p>
      <h1>Anecdote with the most votes</h1>
     
      <p>The most popular:  {anecdotes[votes.indexOf(maxVotes)]} </p>
       
    </div>
  )
}
 //  {anecdotes[1]} el most popular lo que hace es que me muestra el indice del array de la anecdota mas popular

export default App
