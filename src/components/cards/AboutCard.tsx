type AboutCardProps = {
  icon: string
  title: string
  description: string
}

function AboutCard({
  icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <article className="about-card">
      <div className="about-card__top">
        <div className="about-card__icon">
          <img src={icon} alt="" aria-hidden="true" />
        </div>

        <h3 className="about-card__title">
          {title}
        </h3>
      </div>

      <p className="about-card__description">
        {description}
      </p>
    </article>
  )
}

export default AboutCard