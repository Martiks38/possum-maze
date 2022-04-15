import MenuMovil from 'components/MenuMovil'
import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import styles from './navbar.module.css'

function Navbar() {
  const [viewMenuMovil, setViewMenuMovil] = useState(false)
  const [viewIcon, setViewIcon] = useState(false)

  const toggleViewMenu = () => {
    setViewMenuMovil(!viewMenuMovil)
  }

  useEffect(() => {
    const toggleIconNavbar = (event) => {
      if (event.target.innerWidth < 520) {
        setViewIcon(true)
      } else {
        setViewMenuMovil(false)
        setViewIcon(false)
      }
    }

    const pressedOutMenu = (event) => {
      const $details = document.querySelector('details[open]')
      if (event.target === $details) {
        const $footer = document.querySelector('#root footer')
        setViewMenuMovil(false)
        $footer.classList.remove('back-menu')
      }
    }

    if (window.innerWidth < 520) setViewIcon(true)

    window.addEventListener('resize', toggleIconNavbar)
    window.addEventListener('click', pressedOutMenu)
    return () => {
      window.removeEventListener('resize', toggleIconNavbar)
      window.removeEventListener('click', pressedOutMenu)
    }
  }, [])

  return (
    <>
      {!viewIcon ? (
        <>
          <nav>
            <ul className={styles.menu}>
              <li>
                <Link href="/" className={styles.linkBtn}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/canciones" className={styles.linkBtn}>
                  Canciones
                </Link>
              </li>
              <li>
                <Link href="/series" className={styles.linkBtn}>
                  Series
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <span className={styles.panelMenu}>
          <button
            className="hamburger hamburger--minus"
            type="button"
            onClick={toggleViewMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </span>
      )}
      {viewMenuMovil && <MenuMovil />}
    </>
  )
}

export default Navbar
