type ArticleCardProps = {
  image: string
  title: string
  category: string
  date: string
  description: string
  imagePosition?: string
}

function ArticleCard({
  image,
  title,
  category,
  date,
  description,
  imagePosition = 'center',
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <div className="article-card__visual">
        <img
          className="article-card__image"
          src={image}
          alt=""
          aria-hidden="true"
          style={{ objectPosition: imagePosition }}
        />

        <div
          className="article-card__overlay"
          aria-hidden="true"
        />

        <h3 className="article-card__title">
          {title}
        </h3>

        <div className="article-card__meta">
          <span className="article-card__category">
            {category}
          </span>

          <span className="article-card__date">
            {date}
          </span>
        </div>
      </div>

      <div className="article-card__body">
        <p className="article-card__description">
          {description}
        </p>

        <button
          className="article-card__read"
          type="button"
          aria-label={`Read ${title}`}
        >
          <span>Read</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  )
}

export default ArticleCard