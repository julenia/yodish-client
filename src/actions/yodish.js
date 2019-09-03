import * as request from 'superagent'
import { yodishURL, yodishURLbackup } from '../constants'
import { endianness } from 'os';
export const YODISH_TRANSLATED = 'YODISH_TRANSLATED'

const yodishTranslated = yodish => ({
  type: YODISH_TRANSLATED,
  yodish
})

export const translateYodish = (data) => (dispatch, getState) => {
  const query = encodeURIComponent(data.text)
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const url = `https://api.funtranslations.com/translate/yoda.json?text=${query}`
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
      .catch(error => console.error)
    }
    return
    
  })
  }