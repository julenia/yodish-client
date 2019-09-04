import React from 'react'
import { connect } from 'react-redux'
import { translateYodish } from '../actions/yodish'
import TranslateInput from './TranslateInput'
import TextToSpeechContainer from './TextToSpeechContainer';

class TranslateInputContainer extends React.Component {
  state = {
    yodish: '',
    text: ''
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
      text: ''
    })
  }

  render() {
    return (
      <div><TranslateInput
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      yodish={this.props.yodish}
    />
    {this.props.yodish && <TextToSpeechContainer language={
      this.props.yodish.contents 
      ? this.props.yodish.contents.translated 
      : this.props.yodish.yodish}/>}</div>)
  }
}
const mapStateToProps = state => {
  return {
    yodish: state.yodish,
  }

}

export default connect(mapStateToProps, { translateYodish })(TranslateInputContainer)