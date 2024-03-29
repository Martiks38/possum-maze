import React, { Suspense } from 'react'

import { Route, Switch } from 'wouter'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Main from './layout/Main'
import Footer from './layout/Footer'
import Header from './layout/Header'

import Canciones from 'pages/Canciones'
import Series from 'pages/Series'
import Page404 from 'pages/Page404'

import Loader from 'components/Loader'

const Home = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <>
      <Header />
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css"
            integrity="sha512-+mlclc5Q/eHs49oIOCxnnENudJWuNqX5AogCiqRBgKnpoplPzETg2fkgBFVC6WYUVxYYljuxPNG8RE7yBy1K+g=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Helmet>
        <Main>
          <Suspense
            fallback={
              <div className="loaderPage">
                <Loader />
              </div>
            }
          >
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/canciones" component={Canciones} />
              <Route path="/series" component={Series} />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </HelmetProvider>
      <Footer />
    </>
  )
}

export default App
