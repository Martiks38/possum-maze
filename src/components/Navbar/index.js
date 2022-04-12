import React from 'react'
import { Link } from 'wouter'
import styles from './navbar.module.css'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import MenuMovil from 'components/MenuMovil'

// const LinkBtn = styled(Link)`
//   display: block;
//   color: var(--white-color);
//   text-decoration: none;
//   padding: 0.5rem 1rem;
//   font-size: 1.3rem;
// `

function Navbar() {
  // const [viewMenuMovil, setViewMenuMovil] = useState(false)
  // const [viewIcon, setViewIcon] = useState(false)

  // const toggleViewMenu = () => {
  //   setViewMenuMovil(!viewMenuMovil)
  //   const $footer = document.querySelector('#root footer')
  //   $footer.classList.toggle('back-menu')
  // }

  // useEffect(() => {
  //   const toggleIconNavbar = (event) => {
  //     if (event.target.innerWidth < 520) {
  //       setViewIcon(true)
  //     } else {
  //       setViewMenuMovil(false)
  //       setViewIcon(false)
  //     }
  //   }

  //   const pressedOutMenu = (event) => {
  //     const $details = document.querySelector('details[open]')
  //     if (event.target === $details) {
  //       const $footer = document.querySelector('#root footer')
  //       setViewMenuMovil(false)
  //       $footer.classList.remove('back-menu')
  //     }
  //   }

  //   if (window.innerWidth < 520) setViewIcon(true)

  //   window.addEventListener('resize', toggleIconNavbar)
  //   window.addEventListener('click', pressedOutMenu)
  //   return () => {
  //     window.removeEventListener('resize', toggleIconNavbar)
  //     window.removeEventListener('click', pressedOutMenu)
  //   }
  // }, [])

  return (
    <>
      <nav>
        <ul className={styles.menu}>
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
  )
}

export default Navbar
