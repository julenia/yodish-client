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
  // .catch(err => {
  //   if(err.status===429) {
  //     request.get(`${proxyurl + yodishURLbackup}?text=${query}`)
  //     .then(res => {
  //       console.log(res)
  //       dispatch(yodishTranslated(res.body))})
  //     .catch(console.error)
  //   }
  //   return
  // })
  }