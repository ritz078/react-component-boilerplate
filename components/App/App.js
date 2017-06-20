import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.scss'

export default function App (props) {
  return <button className={styles.app} onClick={props.onClick}>Hello World</button>
}

App.propTypes = {
  onClick: PropTypes.func
}

App.defaultProps = {
  onClick () {}
}
