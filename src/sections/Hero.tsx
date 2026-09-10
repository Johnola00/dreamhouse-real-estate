import heroHouse from '../assets/images/hero-dream-house.png'

import facebookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import xIcon from '../assets/icons/x.svg'
import pinterestIcon from '../assets/icons/pinterest.svg'

import CarouselArrow from '../components/ui/CarouselArrow'
import LargeArrowButton from '../components/ui/LargeArrowButton'
import PropertyDetails from '../components/shared/PropertyDetails'

import './Hero.css'

const propertyDetails = [
  {
    label: 'Materials:',
    value: 'Aerated concrete',
  },
  {
    label: 'Square:',
    value: '134m2',
  },
  {
    label: 'Price:',
    value: '$120 000',
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    icon: facebookIcon,
    href: '#',
  },
  {
    name: 'Instagram',
    icon: instagramIcon,
    href: '#',
  },
  {
    name: 'X',
    icon: xIcon,
    href: '#',
  },
  {
    name: 'Pinterest',
    icon: pinterestIcon,
    href: '#',
  },
]

function Hero() {
  return (
    <section className="hero" id="gallery">
      <div className="hero__inner">
        <div className="hero__beige-panel" aria-hidden="true" />
        <div className="hero__gray-panel" aria-hidden="true" />

        <h1 className="hero__title">
          The house
          <br />
          of your
          <br />
          <span>dreams</span>
        </h1>

        <p className="hero__intro">
          Discover the beauty and functionality houses designed with minimalism
          in mind
        </p>

        <div className="hero__property-copy">
          <h2 className="hero__property-name">Dream House</h2>

          <p className="hero__property-description">
            Model house with large panoramic window and fireplace
          </p>
        </div>

        <div className="hero__image-wrapper">
          <img
            className="hero__image"
            src={heroHouse}
            alt="Modern Dream House with large panoramic windows"
          />

          <div className="hero__mobile-arrows">
            <CarouselArrow direction="previous" />
            <CarouselArrow direction="next" />
          </div>
        </div>

        <div className="hero__desktop-arrows">
          <CarouselArrow direction="previous" />
          <CarouselArrow direction="next" />
        </div>

        <div className="hero__details">
          <PropertyDetails details={propertyDetails} />
        </div>

        <div className="hero__socials">
          {socialLinks.map(({ name, icon, href }) => (
            <a
              href={href}
              key={name}
              aria-label={name}
              onClick={(event) => event.preventDefault()}
            >
              <img src={icon} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="hero__cta">
          <span>View More</span>
          <LargeArrowButton />
        </div>
      </div>
    </section>
  )
}

export default Hero
