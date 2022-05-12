import React, { useState } from 'react'
import Loader from 'components/Loader'
import styles from './series.module.css'
import { getShows } from 'services/getShows'
import ResultShow from './results'
import { Helmet } from 'react-helmet-async'

function Series() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target

    getShows({ form, setLoader, setData })

    form.show.value = ''
  }

  return (
    <>
      <Helmet>
        <title>Possum Maze | Shows</title>

        <meta
          name="description"
          content="Laxy te ayudará a buscar una lista de tu serie favorita."
        />

        <meta property="og:title" content="Possum Maze | Shows" />
        <meta
          property="og:description"
          content="Laxy te ayudará a buscar una lista de tu serie favorita."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <img
        src="/presentacion.webp"
        alt="Imagen de presentación"
        className="image_search"
      />
      {Object.keys(data).length === 0 ? (
        <>
          <h1 className={styles.title}>Buscar la serie</h1>
          <form id="search" onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="show"
              className={styles.input}
              placeholder="Nombre de la banda..."
              autoComplete="off"
              spellCheck={false}
              autoFocus
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
        <ResultShow data={data} setData={setData} />
      )}
    </>
  )
}

export default Series
