import facebookIcon from '../assets/icons/footer/facebook.svg'
import instagramIcon from '../assets/icons/footer/instagram.svg'
import xIcon from '../assets/icons/footer/x.svg'
import pinterestIcon from '../assets/icons/footer/pinterest.svg'

import './Footer.css'

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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">
          © 2024 DreamHouse
        </p>

        <nav
          className="footer__legal"
          aria-label="Legal"
        >
          <a
            className="footer__legal-link"
            href="#"
          >
            Terms of use
          </a>

          <a
            className="footer__legal-link"
            href="#"
          >
            Privacy policy
          </a>
        </nav>

        <div
          className="footer__socials"
          aria-label="Social media"
        >
          {socialLinks.map(
            (social) => (
              <a
                key={social.name}
                className="footer__social-link"
                href={social.href}
                aria-label={
                  social.name
                }
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer