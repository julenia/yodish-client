import { combineReducers } from 'redux'
import yodish from './yodish'
import speech from './speech'
import sith from './sith'

export default combineReducers({
  yodish,
  sith,
  speech
})