import howWeWorkImage from '../assets/images/how-we-work/how-we-work-video.png'
import ctaHouseImage from '../assets/images/how-we-work/how-we-work-cta-house.png'

import playIcon from '../assets/icons/how-we-work/play.svg'
import arrowUpRightIcon from '../assets/icons/property/arrow-up-right-dark.svg'

import './HowWeWork.css'

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We begin by discussing your needs, preferences, and budget, forming the concept of your future home.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our architects create a custom project with drawings and 3D visualizations. After approval, we prepare the necessary documents and estimates.',
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'We start construction, ensuring quality and adherence to timelines at every stage. We keep you regularly informed about progress.',
  },
  {
    number: '04',
    title: 'Project Handover',
    description:
      'We conduct a final quality check, address any issues, and hand over the keys to your new home along with all documents and warranties.',
  },
]

function HowWeWork() {
  return (
    <section className="how-we-work" id="how-we-work">
      <div className="how-we-work__main">
        <div className="how-we-work__content">
          <div className="how-we-work__left">
            <h2 className="how-we-work__heading">
              How We Work
            </h2>

            <div className="how-we-work__visual">
              <img
                className="how-we-work__image"
                src={howWeWorkImage}
                alt="Modern country house"
              />

              <button
                className="how-we-work__play"
                type="button"
                aria-label="View project preview"
              >
                <img
                  src={playIcon}
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div className="how-we-work__steps">
            {processSteps.map((step) => (
              <article
                className="how-we-work__step"
                key={step.number}
              >
                <div className="how-we-work__step-number">
                  {step.number}
                </div>

                <div className="how-we-work__step-copy">
                  <h3 className="how-we-work__step-title">
                    {step.title}
                  </h3>

                  <p className="how-we-work__step-description">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="how-we-work__cta">
        <div
          className="how-we-work__cta-shape"
          aria-hidden="true"
        />

        <img
          className="how-we-work__cta-house"
          src={ctaHouseImage}
          alt=""
          aria-hidden="true"
        />

        <div className="how-we-work__cta-copy">
          <h3 className="how-we-work__cta-title">
            Start fulfilling your
            <br />
            dreams with us
          </h3>

          <p className="how-we-work__cta-description">
            Flexible approach to each client
          </p>
        </div>

        <button
          className="how-we-work__cta-button"
          type="button"
          aria-label="Start your project"
        >
          <img
            src={arrowUpRightIcon}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  )
}

export default HowWeWork