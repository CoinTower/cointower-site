import React from 'react'
import Link from 'gatsby-link'

import TextLogo from '../images/text-logo.svg'
import CircleLogo from '../images/image-logo.svg'
import YouTube from 'react-youtube'
import AppStore from '../images/appstore.svg'
import GoogPlay from '../images/gplay.svg'

const IndexPage = () => (
  <div className="home">
    
    <div className="content">
      <div className="header">
        <img className="imgLogo" src={CircleLogo} alt="Logo" />
        <img className="txtLogo" src={TextLogo} alt="Logo" />
      </div>
    
      <span className="slogan">PLAY ROCK PAPER SCISSORS, WIN REAL CASH.</span>

      <div className="youtube-container">
        <YouTube
          videoId={'QEkC_Q1ERyk'}
          className="youtube" />
      </div>

      <div className="app-stores">
        <a href="#"><img className="app-store" src={AppStore} alt="Logo" /></a>
        <a href="#"><img className="goog-play" src={GoogPlay} alt="Logo" /></a>
      </div>
    </div>

    <div className="footer">
      <span>Copyright Spanky & Co. 2017</span>
      <a className="tc-link" href="#"><span>Terms and Conditions</span></a>
    </div>
  
  </div>
)

export default IndexPage
