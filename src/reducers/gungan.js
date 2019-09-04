import { GUNGAN_TRANSLATED } from '../actions/gungan'

export default (state = '', action = {}) => {
  switch (action.type) {
    case GUNGAN_TRANSLATED:
      return action.gungan
    default:
      return state
  }
} 