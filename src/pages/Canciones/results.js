import React from 'react'
import styles from './canciones.module.css'

function Results({ data, setData }) {
  const expReg = /(\n){3,}/gm
  let letter = data.lyrics.replace(expReg, '\r')

  return (
    <>
      <h1>Resultado</h1>
      <button className={styles.button} onClick={() => setData({})}>
        Buscar más canciones
      </button>
      <article className={styles.cancion}>
        <h2>{data.artist}</h2>
        <h3>{data.title}</h3>
        <blockquote className={styles.letter}>{letter}</blockquote>
      </article>
    </>
  )
}

export default Results
