import * as request from 'superagent'
import {speechURL, proxyurl} from '../constants'

export const AUDIO_CREATED = 'AUDIO_CREATED'

const makeSpeech = speech => ({
  type: AUDIO_CREATED,
  speech
})
const makeSound =(snd) => {
  const sound = new Audio(snd)
  sound.play()
}

export const textToSpeech = data => (dispatch) => {
  console.log(data)
  const key = '6a11b2ec828643a6b434a01b57c69c3c'
  const lang='en-us'
  request
  .post(`${proxyurl + speechURL}?key=${key}&hl=${lang}&src=${data}&c=mp3&b64=true&r=-2`)
  .then(res => {
    console.log('textToSpeech', res)
    makeSound(res.text)
    dispatch(makeSpeech(res.text))
  })
  .catch(console.error)
}