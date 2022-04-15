import React from 'react'
import styles from './canciones.module.css'

function ResultSong({ data, setData }) {
  let letter

  if (data?.lyrics) {
    const expReg = /(\n){3,}/gm
    letter = data.lyrics.replace(expReg, '\r')
  }

  return (
    <>
      <h1>Resultado</h1>
      <button className={styles.button} onClick={() => setData({})}>
        Buscar más canciones
      </button>
      {data.hasOwnProperty('lyrics') ? (
        <>
          <article className={styles.cancion}>
            <h2>{data.artist}</h2>
            <h3>{data.title}</h3>
            <blockquote className={styles.letter}>{letter}</blockquote>
          </article>
        </>
      ) : (
        <article className={styles.cancion}>
          <h2>Error</h2>
          <p>
            Laxy no puedo encontrar la canción{' '}
            <span className={styles.datos}>{data.title}</span> interpretada por{' '}
            <span className={styles.datos}>{data.artist}</span>
          </p>
        </article>
      )}
    </>
  )
}

export default ResultSong
