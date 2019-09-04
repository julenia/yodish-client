import { combineReducers } from 'redux'
import yodish from './yodish'
import speech from './speech'
import sith from './sith'
import gungan from './gungan'

export default combineReducers({
  yodish,
  sith,
  gungan,
  speech
})