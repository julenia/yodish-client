import { YODISH_TRANSLATED } from '../actions/yodish'

export default (state = '', action = {}) => {
  switch (action.type) {
    case YODISH_TRANSLATED:
      return action.yodish
    default:
      return state
  }
} 