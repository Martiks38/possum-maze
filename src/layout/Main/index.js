import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './main.module.css'

function Main({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="https://www.theaudiodb.com/api/v1/json/2/search.php?s="
        />
      </Helmet>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Main
