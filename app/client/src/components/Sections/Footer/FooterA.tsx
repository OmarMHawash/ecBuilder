import React from 'react'
import SeperatorE from '../../Elements/SeperatorE'
import { headerData, metaData, socialsData } from '../../../utils/newProject'
import './Footer.scss'

const FooterA = (): JSX.Element => {
  return (
    <footer className="footer-a">
      <div className="upper-footer">
        <div className="quick-nav">
          <ul>
            {headerData.main_nav.map((item) => (
              <a href={item.href} key={item.name.toString()}>
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="quick-nav">
          <ul>
            {headerData.more_nav.list.map((item) => (
              <a href={item.href} key={item.title.toString()}>
                <li>{item.title}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="seperator-wrapper">
          <SeperatorE title={metaData.title} desc={metaData.mini_desc} socials={socialsData} />
        </div>
      </div>
      <div className="lower-footer">
        <p>
          {metaData.title} 2023 © All Right reserved. developed with love by:
          <a href={socialsData[2].href}>@OmarMHawash</a>
        </p>
      </div>
    </footer>
  )
}

export default FooterA
