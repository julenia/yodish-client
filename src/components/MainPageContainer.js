import React from 'react'
import { connect } from 'react-redux'
import MainPage from './MainPage'

class MainPageContainer extends React.Component {

  render() {
    return (
      <div><MainPage/></div>)
  }
}

export default connect(null)(MainPageContainer)