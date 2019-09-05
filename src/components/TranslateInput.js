import * as React from 'react'
import '../css/yodish.css'
import TextToSpeechContainer from './TextToSpeechContainer'
import { Link } from 'react-router-dom'
export default function TranslateInput (props){

  return(
    <div>
      <img src='https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png' alt='yoda' className='yodaPic'/>
      <div className='formDisplay'>
      <h1>YODISH</h1>
      <form onSubmit={props.onSubmit} className='form'>
        <div><label>
        Enter the text you want to translate to yodish!:
        <input type="text" name="text" value={props.values.text} onChange={props.onChange}/>
      </label></div>
      <div><button type="submit">Translate</button></div>
      <div>
    {props.yodish && <div className='translatedText'>
    {props.yodish.contents ? props.yodish.contents.translated : props.yodish.yodish}
    </div>}
    {props.yodish && <TextToSpeechContainer language={
      props.yodish.contents 
      ? props.yodish.contents.translated 
      : props.yodish.yodish}/>}
    </div>
    </form> 
    </div>
    <Link to='/'><button>Back</button></Link>
    </div>)

}