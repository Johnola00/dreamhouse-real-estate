import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import TestimonialCard from '../components/cards/TestimonialCard'

import sarahConnor from '../assets/images/customer-reviews/sarah-connor.png'
import olegTinkoff from '../assets/images/customer-reviews/oleg-tinkoff.png'
import barbaraStreisand from '../assets/images/customer-reviews/barbara-streisand.png'

import './CustomerReviews.css'

const testimonials = [
  {
    name: 'Sarah Connor',
    project: 'Bought the Tranquil Haven project',
    review:
      'We are thrilled with our new home! The Tranquil Haven project exceeded all our expectations. The spacious rooms, cozy atmosphere, and high-quality materials have made our country house the perfect retreat. Thank you for your professionalism and attention to detail!',
    image: sarahConnor,
    imagePosition: 'center',
  },
  {
    name: 'Oleg Tinkoff',
    project: 'Bought the Lakeside Serenity project',
    review:
      'Lakeside Serenity is a magnificent project! The house is situated by the lake, and the views are simply stunning. The spacious rooms and modern amenities make living in this house comfortable and enjoyable. A huge thank you for such a wonderful project and impeccable work!',
    image: olegTinkoff,
    imagePosition: 'center',
  },
  {
    name: 'Barbara Streisand',
    project: 'Bought the Sunny Retreat project',
    review:
      'The Sunny Retreat project is our dream home. Spacious rooms, a smart layout, and thoughtful construction quality. The team worked at a high level, adhering to all deadlines and considering our wishes. We are very satisfied with the result!',
    image: barbaraStreisand,
    imagePosition: 'center',
  },
]

function CustomerReviews() {
  const viewportRef =
    useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] =
    useState(0)

  const [canScrollLeft, setCanScrollLeft] =
    useState(false)

  const [canScrollRight, setCanScrollRight] =
    useState(true)

  const isMobile = () =>
    window.matchMedia(
      '(max-width: 767px)',
    ).matches

  const getCards = useCallback(() => {
    const viewport = viewportRef.current

    if (!viewport) return []

    return Array.from(
      viewport.querySelectorAll<HTMLElement>(
        '.customer-reviews__card-wrapper',
      ),
    )
  }, [])

  const getCardStep = useCallback(() => {
    const cards = getCards()

    if (cards.length >= 2) {
      return (
        cards[1].offsetLeft -
        cards[0].offsetLeft
      )
    }

    if (cards.length === 1) {
      return cards[0].offsetWidth + 20
    }

    return 0
  }, [getCards])

  const updateNavigationState =
    useCallback(() => {
      const viewport = viewportRef.current

      if (!viewport) return

      const maxScrollLeft =
        viewport.scrollWidth -
        viewport.clientWidth

      setCanScrollLeft(
        viewport.scrollLeft > 2,
      )

      setCanScrollRight(
        viewport.scrollLeft <
          maxScrollLeft - 2,
      )

      if (isMobile()) {
        const step = getCardStep()

        if (step > 0) {
          const index = Math.round(
            viewport.scrollLeft / step,
          )

          setActiveIndex(
            Math.max(
              0,
              Math.min(
                testimonials.length - 1,
                index,
              ),
            ),
          )
        }
      }
    }, [getCardStep])

  const scrollToMobileCard = (
    index: number,
  ) => {
    const viewport = viewportRef.current
    const cards = getCards()

    if (
      !viewport ||
      !cards[index] ||
      !cards[0]
    ) {
      return
    }

    const left =
      cards[index].offsetLeft -
      cards[0].offsetLeft

    viewport.scrollTo({
      left,
      behavior: 'smooth',
    })
  }

  const scrollPrevious = () => {
    const viewport = viewportRef.current

    if (!viewport) return

    if (!isMobile()) {
      viewport.scrollTo({
        left: 0,
        behavior: 'smooth',
      })

      return
    }

    scrollToMobileCard(
      Math.max(0, activeIndex - 1),
    )
  }

  const scrollNext = () => {
    const viewport = viewportRef.current

    if (!viewport) return

    if (!isMobile()) {
      viewport.scrollTo({
        left:
          viewport.scrollWidth -
          viewport.clientWidth,

        behavior: 'smooth',
      })

      return
    }

    scrollToMobileCard(
      Math.min(
        testimonials.length - 1,
        activeIndex + 1,
      ),
    )
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

    viewport.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      },
    )

    window.addEventListener(
      'resize',
      handleResize,
    )

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
      className="customer-reviews"
      id="customer-reviews"
    >
      <div className="customer-reviews__inner">
        <h2 className="customer-reviews__heading">
          Customers About Us
        </h2>

        <div
          className="customer-reviews__navigation"
          aria-label="Customer review navigation"
        >
          <button
            type="button"
            className="customer-reviews__nav-button"
            aria-label="Previous review"
            onClick={scrollPrevious}
            disabled={!canScrollLeft}
          >
            <span aria-hidden="true">
              ←
            </span>
          </button>

          <button
            type="button"
            className="customer-reviews__nav-button"
            aria-label="Next review"
            onClick={scrollNext}
            disabled={!canScrollRight}
          >
            <span aria-hidden="true">
              →
            </span>
          </button>
        </div>

        <div
          ref={viewportRef}
          className="customer-reviews__viewport"
        >
          <div className="customer-reviews__track">
            {testimonials.map(
              (testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`customer-reviews__card-wrapper ${
                    index === activeIndex
                      ? 'customer-reviews__card-wrapper--active'
                      : 'customer-reviews__card-wrapper--inactive'
                  }`}
                >
                  <TestimonialCard
                    image={
                      testimonial.image
                    }
                    name={testimonial.name}
                    project={
                      testimonial.project
                    }
                    review={
                      testimonial.review
                    }
                    imagePosition={
                      testimonial.imagePosition
                    }
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews