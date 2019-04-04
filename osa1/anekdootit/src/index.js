import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [state, setState] 
    = useState({selected: 0,
                winner: 0,
                points: Array(anecdotes.length).fill(0)})

  const voteClick = () => {
    const points = [...state.points];
    points[state.selected]++;
    
    var winner = points[state.selected] > points[state.winner] ?
                 state.selected : state.winner;
    
    setState({...state, points: points, winner: winner});
  }

  const nextAnecdoteClick = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1));
    setState({...state, selected: random});
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {props.anecdotes[state.selected]}<br />
        has {state.points[state.selected]} votes<br />
        <button onClick={voteClick}>Vote</button>
        <button onClick={nextAnecdoteClick}>Next anecdote</button><br />
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {props.anecdotes[state.winner]}<br />
        has {state.points[state.winner]} votes 
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)