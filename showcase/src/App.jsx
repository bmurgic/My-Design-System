import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { NavBar } from './sections/NavBar.jsx'
import { FooterSection } from './sections/FooterSection.jsx'
import { RouteSkeleton } from './components/RouteSkeleton.jsx'

const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage.jsx'))
const ComponentsPage = lazy(() => import('./pages/ComponentsPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))

function FocusOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    const main = document.getElementById('main-content')
    if (main) {
      main.setAttribute('tabindex', '-1')
      main.focus({ preventScroll: true })
    }
    document.title = getRouteTitle(pathname)
  }, [pathname])

  return null
}

function getRouteTitle(pathname) {
  if (pathname === '/components') return 'BM · Components'
  if (pathname === '/about') return 'BM · About'
  return 'BM · Design System'
}

export default function App() {
  return (
    <>
      {/* Noise texture overlay for depth/atmosphere */}
      <div className="noise-overlay" aria-hidden="true" />

      <FocusOnRouteChange />
      <NavBar />

      <main id="main-content" style={{ position: 'relative', zIndex: 1, outline: 'none' }}>
        <Suspense fallback={<RouteSkeleton />}>
          <Routes>
            <Route path="/" element={<DesignSystemPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>

      <FooterSection />
    </>
  )
}
