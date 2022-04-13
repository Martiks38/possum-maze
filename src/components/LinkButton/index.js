import React from 'react'
import { Link } from 'wouter'

function Button({ children, link, styles }) {
  return (
    <Link href={link} className={styles}>
      {children}
    </Link>
  )
}

export default Button
