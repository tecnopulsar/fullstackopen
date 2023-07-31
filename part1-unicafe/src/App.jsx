import { useState } from 'react'
import './App.css'


const Button = (props) => {
  const { onclick, text } = props;
  return (
    <button onClick={onclick}>{text}</button>
  )
}

const Estadisticas = (props) => {
  const { text, value } = props;

  return (
    <tr>
      <td style={{textAlign:'left', width:'200px'}}>{text}</td>
      <td style={{textAlign:'right'}}>{value}</td>
    </tr>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handClickGood = () => {
    setGood(good + 1)
  }
  const handClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <div>
        <h1>Reputación</h1>
        <div>
          <Button onclick={handClickGood} text={'Me Gusta'} />
          <Button onclick={handClickNeutral} text={'Neutral'} />
          <Button onclick={handClickBad} text={'No Me Gusta'} />
        </div>
        <h2>Estadisticas</h2>
        <div>

          {(good === 0 && bad === 0 && neutral === 0) ? <h3>No hay estadisticas aún</h3> :
            <>
              <Estadisticas text={'Me gusta'} value={good} />
              <Estadisticas text={'Neutral'} value={neutral} />
              <Estadisticas text={'No Me gusta'} value={bad} />
              <br />
              <Estadisticas text={'Total de comentarios'} value={(good + neutral + bad)} />
              <Estadisticas text={'Puntuación promedio'} value={(good - bad) / (good + neutral + bad)} />
              <Estadisticas text={'Puntuacion Positiva'} value={`${good / (good + neutral + bad) * 100}%`} />
            </>

          }
        </div>
      </div>
    </>
  )
}

export default App
