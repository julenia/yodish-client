import React from 'react'
import { connect } from 'react-redux'
import { textToSpeech } from '../actions/speech'
import TextToSpeech from './TextToSpeech'

class TextToSpeechContainer extends React.Component {
  

  onClick = (event) => {
    event.preventDefault()
    const speech = this.props.language
    this.props.textToSpeech(speech)
  }

  render() {
    console.log('language', this.props.language)
    return (
      <TextToSpeech
      onClick={this.onClick}
      yodish={this.props.yodish}
      speech={this.props.speech}
    />)
  }
}
const mapStateToProps = state => {
  return {
    yodish: state.yodish,
    speech: state.speech
  }

}

export default connect(mapStateToProps, { textToSpeech })(TextToSpeechContainer)