import React from 'react'
import Link from 'gatsby-link'
import HomeLogo  from '../../static/icons/home-logo.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={HomeLogo} width="300" />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
