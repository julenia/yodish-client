import React from 'react'
import { connect } from 'react-redux'
import { translateSith } from '../actions/sith'
import SithInput from './SithInput'
import TextToSpeechContainer from './TextToSpeechContainer';

class SithInputContainer extends React.Component {
  state = {
    sith: '',
    text: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.translateSith(this.state)
    this.setState({
      text:'', 
    })
  }

  render() {
    return (
      <div><SithInput
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      sith={this.props.sith}
    />
    {this.props.sith && <TextToSpeechContainer language={this.props.sith.contents.translated}/>}</div>)
  }
}
const mapStateToProps = state => {
  return {
    sith: state.sith,
  }

}

export default connect(mapStateToProps, { translateSith })(SithInputContainer)