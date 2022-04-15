import React, { useState } from 'react'
import { getLyrics } from 'services/getLyrics'
import Loader from 'components/Loader'
import styles from './canciones.module.css'
import ResultSong from './results'
import { Helmet } from 'react-helmet-async'

function Canciones() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target

    getLyrics({ form, setLoader, setData })

    form.artist.value = ''
    form.title.value = ''
  }

  return (
    <>
      <Helmet>
        <title>Possum Maze | Songs</title>

        <meta
          name="description"
          content="Laxy te ayudará a buscar la letra de la canción."
        />

        <meta name="twitter:title" content="Possum Maze | Songs" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Laxy te ayudará a buscar la letra de la canción."
        />
        <meta name="twitter:site" content="@possum-maze" />
        <meta
          name="twitter:image"
          content="http://localhost:3000/presentacion.webp"
        />
        <meta name="twitter:url" content="http://localhost:3000/canciones" />

        <meta property="og:title" content="Possum Maze | Songs" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Laxy te ayudará a buscar la letra de la canción."
        />
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
      <img
        src="/presentacion.webp"
        alt="Imagen de presentación"
        className="image_search"
      />
      {Object.keys(data).length === 0 ? (
        <>
          <h1 className={styles.title}>Buscar la canción</h1>
          <form id="search" onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="artist"
              className={styles.input}
              placeholder="Nombre de la banda..."
              autoComplete="off"
              spellCheck={false}
              autoFocus
              required
            />
            <input
              type="text"
              name="title"
              className={styles.input}
              placeholder="Nombre de la canción..."
              autoComplete="off"
              spellCheck={false}
              required
            />
            <button type="submit" className={styles.button}>
              Buscar
            </button>
          </form>
          {loader && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
        </>
      ) : (
        <ResultSong data={data} setData={setData} />
      )}
    </>
  )
}

export default Canciones
