import React from 'react'
import { connect } from 'react-redux'
import { translateGungan } from '../actions/gungan'
import GunganInput from './GunganInput'

class GunganInputContainer extends React.Component {
  state = {
    gungan: '',
    text: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.translateGungan(this.state)
    this.setState({
      text:'', 
    })
  }

  render() {
    return (
      <div><GunganInput
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      gungan={this.props.gungan}
    />
    </div>)
  }
}
const mapStateToProps = state => {
  return {
    gungan: state.gungan,
  }

}

export default connect(mapStateToProps, { translateGungan })(GunganInputContainer)