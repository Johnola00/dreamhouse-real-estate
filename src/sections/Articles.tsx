import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import ArticleCard from '../components/cards/ArticleCard'

import modernArchitecture from '../assets/images/articles/modern-architectural-trends.png'
import ecoFriendlyMaterials from '../assets/images/articles/eco-friendly-materials.png'
import outdoorKitchen from '../assets/images/articles/outdoor-kitchen.png'
import articleFour from '../assets/images/articles/article-04.png'

import articlesFilterIcon from '../assets/icons/articles/articles-filter.svg'

import './Articles.css'

const categories = [
  'Design and Architecture',
  'Interior and Decor',
  'Landscape Design',
  'Tips and Recommendations',
]

const articles = [
  {
    title: 'Modern Architectural Trends',
    category: 'Design and Architecture',
    date: '06.06.2024',
    description:
      'Discover the secrets of successful country home design. Learn about modern architectural trends, innovative solutions, and best practices in home design.',
    image: modernArchitecture,
    imagePosition: 'center',
  },
  {
    title: 'Eco-Friendly Materials for Home Construction',
    category: 'Design and Architecture',
    date: '06.06.2024',
    description:
      'An overview of eco-friendly materials that will help you build a home without harming the environment.',
    image: ecoFriendlyMaterials,
    imagePosition: 'center',
  },
  {
    title: 'Ideas for Setting Up an Outdoor Kitchen',
    category: 'Design and Architecture',
    date: '06.06.2024',
    description:
      'Tips and ideas for creating a cozy and functional outdoor kitchen where you can enjoy cooking in the fresh air.',
    image: outdoorKitchen,
    imagePosition: 'center',
  },
  {
    title: 'Trends in Country Home Design 2024',
    category: 'Design and Architecture',
    date: '06.06.2024',
    description:
      'Explore the most current trends in country home design this year. Find out which materials, colors, and solutions are in vogue.',
    image: articleFour,
    imagePosition: 'center',
  },
]

function Articles() {
  const viewportRef = useRef<HTMLDivElement>(null)

  const [activeCategory, setActiveCategory] =
    useState(categories[0])

  const [
    mobileFiltersOpen,
    setMobileFiltersOpen,
  ] = useState(false)

  const [canScrollLeft, setCanScrollLeft] =
    useState(false)

  const [canScrollRight, setCanScrollRight] =
    useState(true)

  const updateNavigationState = useCallback(() => {
    const viewport = viewportRef.current

    if (!viewport) return

    const maxScrollLeft =
      viewport.scrollWidth - viewport.clientWidth

    setCanScrollLeft(
      viewport.scrollLeft > 2,
    )

    setCanScrollRight(
      viewport.scrollLeft <
        maxScrollLeft - 2,
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
      viewport.scrollWidth -
      viewport.clientWidth

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

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        setMobileFiltersOpen(false)
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [])

  const matchingArticles =
    articles.filter(
      (article) =>
        article.category ===
        activeCategory,
    )

  const visibleArticles =
    matchingArticles.length > 0
      ? matchingArticles
      : articles

  const hasNonDefaultFilter =
    activeCategory !== categories[0]

  return (
    <section
      className={`articles ${
        mobileFiltersOpen
          ? 'articles--filters-open'
          : ''
      }`}
      id="articles"
    >
      <div className="articles__inner">
        <header className="articles__header">
          <div className="articles__heading-row">
            <h2 className="articles__heading">
              Articles and Tips
            </h2>

            <button
              className={`articles__mobile-filter ${
                mobileFiltersOpen
                  ? 'articles__mobile-filter--open'
                  : ''
              } ${
                hasNonDefaultFilter
                  ? 'articles__mobile-filter--active'
                  : ''
              }`}
              type="button"
              aria-label={
                mobileFiltersOpen
                  ? 'Close article filters'
                  : 'Filter articles'
              }
              aria-expanded={
                mobileFiltersOpen
              }
              aria-controls="articles-mobile-filters"
              onClick={() =>
                setMobileFiltersOpen(
                  (previous) =>
                    !previous,
                )
              }
            >
              <img
                src={
                  articlesFilterIcon
                }
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>

          <p className="articles__intro">
            Here you will find a wealth
            of useful articles, tips, and
            ideas to help you create the
            home of your dreams. Our
            experts share their knowledge
            and experience in design,
            construction, decor, and more.
          </p>

          <div
            id="articles-mobile-filters"
            className={`articles__mobile-filters ${
              mobileFiltersOpen
                ? 'articles__mobile-filters--open'
                : ''
            }`}
            aria-hidden={
              !mobileFiltersOpen
            }
          >
            {categories.map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  tabIndex={
                    mobileFiltersOpen
                      ? 0
                      : -1
                  }
                  className={`articles__category articles__mobile-category ${
                    activeCategory ===
                    category
                      ? 'articles__category--active'
                      : ''
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      category,
                    )
                  }
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </header>

        <div className="articles__toolbar">
          <div
            className="articles__categories"
            aria-label="Article categories"
          >
            {categories.map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  className={`articles__category ${
                    activeCategory ===
                    category
                      ? 'articles__category--active'
                      : ''
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      category,
                    )
                  }
                >
                  {category}
                </button>
              ),
            )}
          </div>

          <div
            className="articles__navigation"
            aria-label="Article navigation"
          >
            <button
              type="button"
              className="articles__nav-button"
              aria-label="Previous articles"
              onClick={scrollToStart}
              disabled={
                !canScrollLeft
              }
            >
              <span aria-hidden="true">
                ←
              </span>
            </button>

            <button
              type="button"
              className="articles__nav-button"
              aria-label="Next articles"
              onClick={scrollToEnd}
              disabled={
                !canScrollRight
              }
            >
              <span aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="articles__viewport"
        >
          <div className="articles__track">
            {visibleArticles.map(
              (article) => (
                <ArticleCard
                  key={article.title}
                  image={article.image}
                  title={article.title}
                  category={
                    article.category
                  }
                  date={article.date}
                  description={
                    article.description
                  }
                  imagePosition={
                    article.imagePosition
                  }
                />
              ),
            )}
          </div>
        </div>

        <button
          className="articles__read-more"
          type="button"
        >
          Read more
        </button>
      </div>
    </section>
  )
}

export default Articles