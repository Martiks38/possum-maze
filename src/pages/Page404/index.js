import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './error.module.css'

function Page404() {
  return (
    <>
      <Helmet>
        <title>Possum Maze | Page No Found</title>
        <meta name="description" content="Está ruta no existe" />

        <meta property="og:title" content="Possum Maze | Page No Found" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Está ruta no existe" />
      </Helmet>
      <h1 className={styles.title}>Error 404</h1>
      <p className={styles.msg}>Laxy no sabe dónde empezar a buscar.</p>
      <img src="/error.webp" alt="Ruta no encontrada" className={styles.img} />
    </>
  )
}

export default Page404
