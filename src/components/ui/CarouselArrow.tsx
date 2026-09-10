import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import './CarouselArrow.css'

type CarouselArrowProps = {
  direction: 'previous' | 'next'
  onClick?: () => void
  className?: string
}

function CarouselArrow({
  direction,
  onClick,
  className = '',
}: CarouselArrowProps) {
  const isPrevious = direction === 'previous'

  return (
    <button
      className={`carousel-arrow ${className}`}
      type="button"
      aria-label={isPrevious ? 'Previous property' : 'Next property'}
      onClick={onClick}
    >
      <img
        src={isPrevious ? arrowLeft : arrowRight}
        alt=""
        aria-hidden="true"
      />
    </button>
  )
}

export default CarouselArrow