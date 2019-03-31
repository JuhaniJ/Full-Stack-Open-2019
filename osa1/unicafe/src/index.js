import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>   
  )
}

const Statistics = ({good, neutral, bad, average, positiveCount}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2><strong>statistiikka</strong></h2>  
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2><strong>statistiikka</strong></h2> 
        <table>
          <Statistic name="hyvä" value={good} />
          <Statistic name="neutraali" value={neutral} />
          <Statistic name="huono" value={bad} />
          <Statistic name="keskiarvo" value={average} />
          <Statistic name="positiivisia" value={positiveCount} unit="%" />
        </table>  
      </div>
    )
  }
}

const Statistic = ({name, value, unit=""}) => {
  return (
    <tbody>
      <tr>
        <td style={{textAlign: 'left'}}>{name}</td>
        <td>{value} {unit}</td>
      </tr> 
    </tbody>
  )
}

const App = () => {
    const [state, setState] 
      = useState({good: 0, neutral: 0, bad: 0, average: 0, positiveCount: 0})

  const klikButton = (value) => () => {
    var status = {
      good: state.good,
      neutral: state.neutral,
      bad: state.bad
    }

    status[value]++
   
    setState({
      good: status.good,
      neutral: status.neutral,
      bad: status.bad,
      average: (status.good - status.bad) / (status.good + status.neutral + status.bad),
      positiveCount: status.good / (status.good + status.neutral + status.bad) * 100
    })
  }
   
  return (
    <div>
      <div>
        <h2><strong>anna palautetta</strong></h2>        
        <Button
          handleClick={klikButton("good")}     
          text="hyvä" />
        <Button
          handleClick={klikButton("neutral")}     
          text="neutraali" />
        <Button
          handleClick={klikButton("bad")}     
          text="huono" />
      </div>
      <Statistics
        good={state.good} 
        neutral={state.neutral}
        bad={state.bad}
        average={state.average}
        positiveCount={state.positiveCount} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)