import React from 'react'
import { Link } from 'wouter'
import Navbar from 'components/Navbar'
import styles from './header.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.a}>
            <img src="/possum-maze.webp" alt="logo" />
          </a>
        </Link>
        <Navbar />
      </header>
    </>
  )
}

export default Header
