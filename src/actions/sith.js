import * as request from 'superagent'
import { sithURL, proxyurl } from '../constants'
export const SITH_TRANSLATED= 'SITH_TRANSLATED'

const sithTranslated = sith => ({
  type: SITH_TRANSLATED,
  sith
})

export const translateSith = (data) => (dispatch, getState) => {
  const query = encodeURIComponent(data.text)
  request
  .get(`${proxyurl + sithURL}?text=${query}`)
  .then(response => {
    console.log(response)
    dispatch(sithTranslated(response.body))})
  .catch(console.error)
  }