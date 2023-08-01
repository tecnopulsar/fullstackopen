import { useState } from 'react'
import './App.css'
import { datos } from './assets/datos'

function App() {

  const objVotosInicial = [0, 0, 0, 0, 0, 0]
  const [anecdotes, setAnecdotes] = useState(datos)
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [yaVoto, setyaVoto] = useState(false)
  const [votos, setVotos] = useState(objVotosInicial)
  const [anecdotaMasVotos, setAnecdotaMasVotos] = useState('')

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
  }

  const objOrdenado = () => {
    const copyArray = votos;
    copyArray.sort((a, b) => {
      return Number.parseInt(b) - Number.parseInt(a)
    })
    return copyArray[0]
  }

  const buscarMaxVotos = () => {
    const maxVotos = objOrdenado();
    return maxVotos;
  }
  const maxAnecdotas = () => {
    const valorabuscar = buscarMaxVotos()
    const frase = anecdotes[votos.indexOf(valorabuscar)];
    return frase
  }

  return (
    <>
      <h2>{anecdotes[selected]}</h2>
      <h3>Cantidad de Me Gusta: {votos[selected.toString()]}</h3>
      <br />
      {!yaVoto ? <button onClick={handClickVote}>Votar Me Gusta</button> : <button disabled>Votar Me Gusta</button>}
      <button onClick={handClick}>Proxima anecdota</button>
      <br />
      {buscarMaxVotos() > 0 && <>
        <h2>Anecdota con mas votos</h2>
        <h3>{maxAnecdotas()}</h3>
        <h3>Con {buscarMaxVotos()} votos</h3>
      </>
      }



    </>
  )
}

export default App
