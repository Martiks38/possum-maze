import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './error.module.css'

function Page404() {
  return (
    <>
      <Helmet>
        <title>Possum Maze | Page No Found</title>

        <meta name="description" content="Está ruta no existe" />

        <meta name="twitter:title" content="Possum Maze | Page No Found" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Está ruta no existe" />
        <meta name="twitter:site" content="@possum-maze" />
        <meta
          name="twitter:image"
          content="http://localhost:3000/presentacion.webp"
        />
        <meta property="og:title" content="Possum Maze | Page No Found" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Está ruta no existe" />
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
      <h1 className={styles.title}>Error 404</h1>
      <p className={styles.msg}>Laxy no sabe dónde empezar a buscar.</p>
      <img src="/error.webp" alt="Ruta no encontrada" className={styles.img} />
    </>
  )
}

export default Page404
