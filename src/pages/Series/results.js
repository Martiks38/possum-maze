import React, { useEffect, useState } from 'react'
import UpButton from 'components/UpButton'
import styles from './series.module.css'

function ResultShow({ data, setData }) {
  const [viewUpBtn, setViewUpBtn] = useState(false)

  let dataKeys = Object.values(data)
  dataKeys.pop()

  useEffect(() => {
    const scrollController = () => {
      let offsetY = window.scrollY

      if (offsetY > 1200) {
        setViewUpBtn(true)
      } else {
        setViewUpBtn(false)
      }
    }

    window.addEventListener('scroll', scrollController)
    return () => window.removeEventListener('scroll', scrollController)
  }, [])

  return (
    <>
      <h1>Resultados</h1>
      <button className={styles.button} onClick={() => setData({})}>
        Buscar más series
      </button>
      {data.hasOwnProperty('0') ? (
        <section className={styles.showsList}>
          {dataKeys.map((show) => (
            <article key={show.show.id}>
              <h2 className={styles.showList__title}>{show.show.name}</h2>
              <div className={styles.showList__content}>
                <blockquote className={styles.description}>
                  {show.show.summary !== null
                    ? show.show.summary
                        .replace(/<p>/gm, '')
                        .replace(/<\/p>/gm, '\r\n')
                        .replace(/<b>|<\/b>/gm, '')
                    : 'Sin descripción'}
                </blockquote>
                <img
                  src={
                    show.show.image
                      ? show.show.image.medium
                      : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                  }
                  alt={show.show.name}
                />
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className={styles.error}>
          <h2>Error</h2>
          <p>
            No se encontraron series sobre{' '}
            <span className={styles.datos}>{data.showName}</span>
          </p>
        </section>
      )}
      {viewUpBtn && <UpButton setViewUpBtn={setViewUpBtn} />}
    </>
  )
}

export default ResultShow
