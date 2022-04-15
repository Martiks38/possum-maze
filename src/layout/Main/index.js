import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './main.module.css'

function Main({ children }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://api.lyrics.ovh" />
        <link rel="preconnect" href="https://api.tvmaze.com" />
      </Helmet>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Main
