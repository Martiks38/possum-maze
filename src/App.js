import React from 'react'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  )
}

export default App
