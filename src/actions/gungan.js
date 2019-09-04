import * as request from 'superagent'
import { gunganURL, proxyurl } from '../constants'
export const GUNGAN_TRANSLATED= 'GUNGAN_TRANSLATED'

const gunganTranslated = gungan => ({
  type: GUNGAN_TRANSLATED,
  gungan
})

export const translateGungan = (data) => (dispatch) => {
  const query = encodeURIComponent(data.text)
  request
  .get(`${proxyurl + gunganURL}?text=${query}`)
  .then(response => {
    console.log(response)
    dispatch(gunganTranslated(response.body))})
  .catch(console.error)
  }