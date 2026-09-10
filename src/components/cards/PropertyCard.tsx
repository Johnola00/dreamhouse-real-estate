type PropertyCardProps = {
  image: string
  title: string
  price: string
  area: string
  beds: string
  baths: string

  areaIcon: string
  bedIcon: string
  bathIcon: string
  arrowIcon: string

  imagePosition?: string
}

function PropertyCard({
  image,
  title,
  price,
  area,
  beds,
  baths,
  areaIcon,
  bedIcon,
  bathIcon,
  arrowIcon,
  imagePosition = 'center',
}: PropertyCardProps) {
  return (
    <article className="property-card">
      <img
        className="property-card__image"
        src={image}
        alt=""
        aria-hidden="true"
        style={{ objectPosition: imagePosition }}
      />

      <div
        className="property-card__overlay"
        aria-hidden="true"
      />

      <h3 className="property-card__title">
        {title}
      </h3>

      <div className="property-card__information">
        <p className="property-card__price">
          {price}
        </p>

        <div className="property-card__details">
          <div className="property-card__detail">
            <img
              src={areaIcon}
              alt=""
              aria-hidden="true"
            />

            <span>{area}</span>
          </div>

          <div className="property-card__detail">
            <img
              src={bedIcon}
              alt=""
              aria-hidden="true"
            />

            <span>{beds}</span>
          </div>

          <div className="property-card__detail">
            <img
              src={bathIcon}
              alt=""
              aria-hidden="true"
            />

            <span>{baths}</span>
          </div>
        </div>
      </div>

      <button
        className="property-card__cta"
        type="button"
        aria-label={`View ${title}`}
      >
        <img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
        />
      </button>
    </article>
  )
}

export default PropertyCard