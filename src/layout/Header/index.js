import React from 'react'
import { Link } from 'wouter'
import Navbar from 'components/Navbar'
import styles from './header.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src="/possum-maze.webp" alt="logo" className={styles.img} />
        </Link>
        <div className={styles.content}>
          <Navbar />
        </div>
      </header>
    </>
  )
}

export default Header
