import React, { useState } from 'react'
import { getLyrics } from 'services/getLyrics'
import Loader from 'components/Loader'
import styles from './canciones.module.css'
import Results from './results'

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
      <img
        src="/presentacion.webp"
        alt="Imagen de presentación"
        className="image_search"
      />
      {Object.keys(data).length === 0 ? (
        <>
          <h1 className={styles.title}>Laxy Seeker Songs</h1>
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
        <Results data={data} setData={setData} />
      )}
    </>
  )
}

export default Canciones
