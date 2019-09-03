import React from 'react'
import { connect } from 'react-redux'
import { translateSith } from '../actions/sith'
import TranslateInput from './TranslateInput'
import TextToSpeechContainer from './TextToSpeechContainer';

class SithInputContainer extends React.Component {
  state = {
    sith: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log()
    this.props.translateSith(this.state)
    this.setState({
      sith:'',
    })
  }

  render() {
    return (
      <div><TranslateInput
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      sith={this.props.sith}
    />
    <TextToSpeechContainer/></div>)
  }
}
const mapStateToProps = state => {
  return {
    sith: state.sith,
  }

}

export default connect(mapStateToProps, { translateSith })(SithInputContainer)