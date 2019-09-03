import { AUDIO_CREATED } from '../actions/speech'

export default (state = '', action = {}) => {
  switch (action.type) {
    case AUDIO_CREATED:
      return action.speech
    default:
      return state
  }
} 