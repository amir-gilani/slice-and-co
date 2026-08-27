import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'
import PizzaDetail from './pages/PizzaDetail'

// The hero is a fixed, full-screen composition; every other page is a normal
// scrolling document. The flag on <html> lets the stylesheet lock scrolling for
// the first case only.
function useHomeLock(isHome) {
  useEffect(() => {
    document.documentElement.dataset.lock = isHome ? 'on' : 'off'
  }, [isHome])
}

// Landing on a new route should start at the top, not wherever the last one
// was scrolled to.
function useScrollReset(pathname) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useHomeLock(isHome)
  useScrollReset(pathname)

  return (
    <div className={`stage flex w-full flex-col ${isHome ? 'h-dvh overflow-hidden' : 'min-h-dvh'}`}>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<PizzaDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isHome && <Footer />}
    </div>
  )
}
