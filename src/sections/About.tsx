import AboutCard from '../components/cards/AboutCard'

import personalizedApproachIcon from '../assets/icons/personalized-approach.svg'
import highQualityIcon from '../assets/icons/high-quality.svg'
import transparentTermsIcon from '../assets/icons/transparent-terms.svg'
import professionalTeamIcon from '../assets/icons/professional-team.svg'

import './About.css'

const advantages = [
  {
    title: 'Personalized Approach',
    description:
      'We carefully consider all your preferences and needs, creating unique projects that perfectly match your lifestyle.',
    icon: personalizedApproachIcon,
  },
  {
    title: 'High Quality',
    description:
      'We use only trusted materials and the latest technologies, ensuring the reliability and durability of each home.',
    icon: highQualityIcon,
  },
  {
    title: 'Transparent Terms',
    description:
      'We provide clear estimates and timelines, ensuring complete transparency without hidden costs.',
    icon: transparentTermsIcon,
  },
  {
    title: 'Professional Team',
    description:
      'Our team has years of experience and a proven track record of successful projects.',
    icon: professionalTeamIcon,
  },
]

const stats = [
  {
    value: '30+',
    label: (
      <>
        Models
        <br />
        of houses
      </>
    ),
  },
  {
    value: '10+',
    label: (
      <>
        Years
        <br />
        of experience
      </>
    ),
  },
  {
    value: '100+',
    label: (
      <>
        Satisfied
        <br />
        customers
      </>
    ),
  },
  {
    value: '7',
    label: (
      <>
        Stages of quality
        <br />
        control
      </>
    ),
  },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <header className="about__header">
          <h2 className="about__heading">
            About Us
          </h2>

          <p className="about__intro">
            We are a team of professionals with many years of experience
            in the design and construction of country houses.
          </p>
        </header>

        <div className="about__cards">
          {advantages.map((item) => (
            <AboutCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="about__stats">
          {stats.map((stat, index) => (
            <div className="about__stat-group" key={stat.value}>
              <div className="about__stat">
                <strong className="about__stat-value">
                  {stat.value}
                </strong>

                <span className="about__stat-label">
                  {stat.label}
                </span>
              </div>

              {index < stats.length - 1 && (
                <span
                  className="about__stat-divider"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About