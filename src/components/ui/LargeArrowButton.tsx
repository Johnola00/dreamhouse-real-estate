import arrowUpRight from '../../assets/icons/arrow-up-right.svg'
import './LargeArrowButton.css'

type LargeArrowButtonProps = {
  ariaLabel?: string
  onClick?: () => void
}

function LargeArrowButton({
  ariaLabel = 'View property',
  onClick,
}: LargeArrowButtonProps) {
  return (
    <button
      className="large-arrow-button"
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <img
        src={arrowUpRight}
        alt=""
        aria-hidden="true"
      />
    </button>
  )
}

export default LargeArrowButton