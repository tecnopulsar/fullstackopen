import { useState } from 'react'
import './App.css'
import { datos } from './assets/datos'

function App() {

  const objVotosInicial = [0, 0, 0, 0, 0, 0]
  const [anecdotes, setAnecdotes] = useState(datos)
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [yaVoto, setyaVoto] = useState(false)
  const [votos, setVotos] = useState(objVotosInicial)
  const [indexMasVotos, setIndexaMasVotos] = useState(0)

  const handClick = () => {
    const numRandom = Math.floor(Math.random() * anecdotes.length)
    setSelected(numRandom)
    setyaVoto(false);
  }

  const handClickVote = () => {
    setyaVoto(true);
    const copia = [...votos];
    copia[selected] += 1;
    setVotos(copia)
    if (copia[selected] > votos[indexMasVotos]) {
      setIndexaMasVotos(selected)
    }
  }

  const alguienVoto = () => {
    return votos.reduce((acc, value) => acc + value)
  }

  return (
    <>
      <h2>{anecdotes[selected]}</h2>
      <h3>Cantidad de Votos: {votos[selected.toString()]}</h3>
      <br />
      {!yaVoto ? <button onClick={handClickVote}>Votar Me Gusta</button> : <button disabled>Votar Me Gusta</button>}
      <button onClick={handClick}>Proxima anecdota</button>
      <br />
      {alguienVoto() > 0 && <>
        <h2>Anecdota con mas votos</h2>
        <h3>{anecdotes[indexMasVotos]}</h3>
        <h3>Con {votos[indexMasVotos]} votos</h3>
      </>
      }



    </>
  )
}

export default App
