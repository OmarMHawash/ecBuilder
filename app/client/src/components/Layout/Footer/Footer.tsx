import React from 'react'
import './Footer.scss'
const Footer = (): JSX.Element => {
  return (
    <footer className="app-footer">
      <div className="footer-wrapper">
        <p>ecBuilder. All rights reserved 2023</p>
        <div className="socials">
          <a
            href="
            https://www.facebook.com/"
          >
            Fb
          </a>
          <a
            href="
            https://www.instagram.com/"
          >
            In
          </a>
          <a
            href="
            https://www.twitter.com/"
          >
            Tw
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
