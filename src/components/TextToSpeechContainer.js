import React from 'react'
import { connect } from 'react-redux'
import { textToSpeech } from '../actions/speech'
import TextToSpeech from './TextToSpeech'

class TextToSpeechContainer extends React.Component {

  onClick = (event) => {
    event.preventDefault()
    const speech = this.props.yodish.contents ? this.props.yodish.contents.translated : this.props.yodish.yodish
    this.props.textToSpeech(speech)
  }

  render() {
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