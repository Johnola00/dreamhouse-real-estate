type TestimonialCardProps = {
  image: string
  name: string
  project: string
  review: string
  imagePosition?: string
}

function TestimonialCard({
  image,
  name,
  project,
  review,
  imagePosition = 'center',
}: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__header">
        <img
          className="testimonial-card__avatar"
          src={image}
          alt={name}
          style={{ objectPosition: imagePosition }}
        />

        <div className="testimonial-card__customer">
          <h3 className="testimonial-card__name">
            {name}
          </h3>

          <p className="testimonial-card__project">
            {project}
          </p>
        </div>
      </div>

      <p className="testimonial-card__review">
        {review}
      </p>
    </article>
  )
}

export default TestimonialCard
