import {
  useEffect,
  useState,
} from 'react'

import type { MouseEvent } from 'react'

import logo from '../assets/icons/Logo.svg'
import menuIcon from '../assets/icons/Menu.svg'

import './Header.css'

const navigationItems = [
  {
    label: 'Gallery',
    target: 'bestsellers',
  },
  {
    label: 'About Us',
    target: 'about',
  },
  {
    label: 'Blog',
    target: 'articles',
  },
]

function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen((current) => !current)
  }

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault()

    const section =
      document.getElementById(target)

    if (!section) return

    const headerOffset = 80

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerOffset

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    })

    closeMenu()
  }

  const scrollToTop = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    closeMenu()
  }

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''

      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    window.addEventListener(
      'resize',
      handleResize,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      window.removeEventListener(
        'resize',
        handleResize,
      )
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__center-panel" />

          <nav
            className="site-header__nav"
            aria-label="Primary navigation"
          >
            {navigationItems.map(
              (item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(event) =>
                    scrollToSection(
                      event,
                      item.target,
                    )
                  }
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <a
            href="#top"
            className="site-header__logo"
            aria-label="DreamHouse home"
            onClick={scrollToTop}
          >
            <img
              src={logo}
              alt="DreamHouse"
            />
          </a>

          <button
            type="button"
            className={`site-header__menu-button ${
              menuOpen
                ? 'site-header__menu-button--open'
                : ''
            }`}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <img
              src={menuIcon}
              alt=""
              aria-hidden="true"
            />
          </button>

          <div className="site-header__divider" />
        </div>
      </header>

      <div
        className={`mobile-menu-backdrop ${
          menuOpen
            ? 'mobile-menu-backdrop--visible'
            : ''
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen
            ? 'mobile-menu--open'
            : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__top">
          <a
            href="#top"
            className="mobile-menu__logo"
            onClick={scrollToTop}
            aria-label="DreamHouse home"
          >
            <img
              src={logo}
              alt="DreamHouse"
            />
          </a>

          <button
            type="button"
            className="mobile-menu__close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          className="mobile-menu__nav"
          aria-label="Mobile navigation"
        >
          {navigationItems.map(
            (item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) =>
                  scrollToSection(
                    event,
                    item.target,
                  )
                }
                className="mobile-menu__link"
              >
                <span>
                  {item.label}
                </span>

                <span
                  className="mobile-menu__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ),
          )}
        </nav>
      </aside>
    </>
  )
}

export default Header