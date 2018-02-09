import React from 'react'
import Link from 'gatsby-link'

import TextLogo from '../images/text-logo.svg'
import CircleLogo from '../images/image-logo.svg'
import YouTube from 'react-youtube'
import AppStore from '../images/appstore.svg'
import GoogPlay from '../images/gplay.svg'
import Splash from '../images/splash.svg'

const IndexPage = () => (
  <div className="home">
    
    <div className="content">
      <div className="header">
        <img className="imgLogo" src={CircleLogo} alt="Logo" />
        <img className="txtLogo" src={TextLogo} alt="Logo" />
      </div>
    
      <span className="slogan">PLAY ROCK PAPER SCISSORS, WIN REAL CASH.</span>

      {/* <div className="youtube-container">
        <YouTube
          videoId={'QEkC_Q1ERyk'}
          className="youtube" />
      </div> */}

      <div className="backup-splash">
        <img className="splash-img" src={Splash} alt="splash" />
      </div>

      <div className="app-stores">
        <a href="#"><img className="app-store" src={AppStore} alt="Logo" /></a>
        <a href="#"><img className="goog-play" src={GoogPlay} alt="Logo" /></a>
      </div>
    </div>

    <div className="footer">
      <span className="copy">Copyright Spanky & Co. 2017</span>
      <span className="tc-links">
        <a className="tc-link" href="https://firebasestorage.googleapis.com/v0/b/cointower-4502d.appspot.com/o/legal%2FTerms-of-Service.pdf?alt=media&token=8e1115da-5e00-4507-964c-0f326f2b959d">
          Terms
        </a>
        <span> and </span>
        <a className="tc-link" href="https://firebasestorage.googleapis.com/v0/b/cointower-4502d.appspot.com/o/legal%2FPrivacy-Policy.pdf?alt=media&token=03b8e906-703e-4626-af86-3246d184d328">
          Privacy
        </a>
      </span>
      <span className="copy">
        <a className="tc-link" href="mailto:contact@cointower.io">
          Privacy
        </a></span>
    </div>
  
  </div>
)

export default IndexPage
