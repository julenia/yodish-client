import React from 'react'
import { connect } from 'react-redux'
import { translateYodish } from '../actions/yodish'
import TranslateInput from './TranslateInput'

class TranslateInputContainer extends React.Component {
  state = {
    yodish: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log()
    this.props.translateYodish(this.state)
    this.setState({
      yodish:'',
    })
  }

  render() {
    return (
      <TranslateInput
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      yodish={this.props.yodish}
    />)
  }
}
const mapStateToProps = state => {
  return {
    yodish: state.yodish,
  }

}

export default connect(mapStateToProps, { translateYodish })(TranslateInputContainer)