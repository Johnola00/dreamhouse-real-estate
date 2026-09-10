import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import PropertyCard from '../components/cards/PropertyCard'

import tranquilHaven from '../assets/images/bestsellers/tranquil-haven.jpg'
import sunnyRetreat from '../assets/images/bestsellers/sunny-retreat.jpg'
import forestOasis from '../assets/images/bestsellers/forest-oasis.jpg'
import lakesideSerenity from '../assets/images/bestsellers/bestseller-04.jpg'

import areaIcon from '../assets/icons/property/area.svg'
import bedIcon from '../assets/icons/property/bed.svg'
import bathIcon from '../assets/icons/property/bath.svg'
import cardArrowIcon from '../assets/icons/property/arrow-up-right-dark.svg'

import './Bestsellers.css'

const properties = [
  {
    title: 'Tranquil Haven',
    price: '$119 900',
    area: '134m2',
    beds: '3',
    baths: '2',
    image: tranquilHaven,
    imagePosition: '47% center',
  },
  {
    title: 'Sunny Retreat',
    price: '$99 900',
    area: '192m²',
    beds: '4',
    baths: '2',
    image: sunnyRetreat,
    imagePosition: '58% center',
  },
  {
    title: 'Forest Oasis',
    price: '$94 500',
    area: '98m²',
    beds: '1',
    baths: '1',
    image: forestOasis,
    imagePosition: '52% center',
  },
  {
    title: 'Lakeside Serenity',
    price: '$88 000',
    area: '128m2',
    beds: '3',
    baths: '2',
    image: lakesideSerenity,
    imagePosition: '56% center',
  },
]

function Bestsellers() {
  const viewportRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateNavigationState = useCallback(() => {
    const viewport = viewportRef.current

    if (!viewport) return

    const maxScrollLeft =
      viewport.scrollWidth - viewport.clientWidth

    const currentScrollLeft = viewport.scrollLeft

    setCanScrollLeft(currentScrollLeft > 2)

    setCanScrollRight(
      currentScrollLeft < maxScrollLeft - 2,
    )
  }, [])

  const scrollToStart = () => {
    const viewport = viewportRef.current

    if (!viewport) return

    viewport.scrollTo({
      left: 0,
      behavior: 'smooth',
    })
  }

  const scrollToEnd = () => {
    const viewport = viewportRef.current

    if (!viewport) return

    const maxScrollLeft =
      viewport.scrollWidth - viewport.clientWidth

    viewport.scrollTo({
      left: maxScrollLeft,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const viewport = viewportRef.current

    if (!viewport) return

    updateNavigationState()

    const handleScroll = () => {
      updateNavigationState()
    }

    const handleResize = () => {
      updateNavigationState()
    }

    viewport.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleResize)

    return () => {
      viewport.removeEventListener(
        'scroll',
        handleScroll,
      )

      window.removeEventListener(
        'resize',
        handleResize,
      )
    }
  }, [updateNavigationState])

  return (
    <section
      className="bestsellers"
      id="bestsellers"
    >
      <div className="bestsellers__inner">
        <h2 className="bestsellers__heading">
          Bestsellers
        </h2>

        <div
          className="bestsellers__navigation"
          aria-label="Bestseller navigation"
        >
          <button
            type="button"
            className="bestsellers__nav-button"
            aria-label="Previous properties"
            onClick={scrollToStart}
            disabled={!canScrollLeft}
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            className="bestsellers__nav-button"
            aria-label="Next properties"
            onClick={scrollToEnd}
            disabled={!canScrollRight}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div
          ref={viewportRef}
          className="bestsellers__viewport"
        >
          <div className="bestsellers__track">
            {properties.map((property) => (
              <PropertyCard
                key={property.title}
                image={property.image}
                title={property.title}
                price={property.price}
                area={property.area}
                beds={property.beds}
                baths={property.baths}
                areaIcon={areaIcon}
                bedIcon={bedIcon}
                bathIcon={bathIcon}
                arrowIcon={cardArrowIcon}
                imagePosition={property.imagePosition}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers