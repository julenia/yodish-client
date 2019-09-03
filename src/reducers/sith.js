import { SITH_TRANSLATED } from '../actions/sith'

export default (state = '', action = {}) => {
  switch (action.type) {
    case SITH_TRANSLATED:
      return action.sith
    default:
      return state
  }
} 