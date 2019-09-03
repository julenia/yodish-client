import * as request from 'superagent'
import { yodishURL, yodishURLbackup, proxyurl } from '../constants'
export const YODISH_TRANSLATED = 'YODISH_TRANSLATED'

const yodishTranslated = yodish => ({
  type: YODISH_TRANSLATED,
  yodish
})

export const translateYodish = (data) => (dispatch, getState) => {
  const query = encodeURIComponent(data.text)
  request
  .get(`${proxyurl + yodishURL}?text=${query}`)
  .then(response => {
    console.log(response)
    dispatch(yodishTranslated(response.body))})
  .catch(err => {
    if(err.status===429) {
      request.get(`${proxyurl + yodishURLbackup}?text=${query}`)
      .then(res => {
        console.log(res)
        dispatch(yodishTranslated(res.body))})
      .catch(console.error)
    }
    return
  })
  }