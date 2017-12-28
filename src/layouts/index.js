import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/app.scss'
import faviconImg from '../images/favicon.png'
import Favicon from 'react-favicon'

const TemplateWrapper = ({ children }) => (
  <div>
    <Favicon url={faviconImg} />
    <Helmet
      title="Cointower: Play RPS, Win Money!"
      meta={[
        { name: 'description', content: 'Play Rock Paper Scissors, Win Money!' },
        { name: 'keywords', content: 'rock, paper, scissors, money, win, app' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
