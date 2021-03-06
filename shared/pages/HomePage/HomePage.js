import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './HomePage.scss'

import HomeHero from './HomeHero/HomeHero'


@cssModules(styles)
export default class HomePage extends Component {

  render() {
    return (
      <div>
        <HomeHero />
        <div styleName="incomingContainer">
          <div styleName="incoming">ICO Details coming soon</div>
        </div>
        <div styleName="socialsContainer">

        </div>
      </div>
    )
  }
}
