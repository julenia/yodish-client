import * as React from 'react'
import '../css/yodish.css'
import TextToSpeechContainer from './TextToSpeechContainer'
import {Link} from 'react-router-dom'

export default function SithInput (props){
  console.log(props)
  return(
    <div>
      <img src='https://img.pngio.com/darth-maul-png-by-gasa979-on-deviantart-darth-maul-png-535_1122.png' alt='sith'/>
      <div className='formDisplay'>
       <h1>SITH</h1>
      <form onSubmit={props.onSubmit}>
      <div><label>
        Enter the text you want to translate to Sith!:
        <input type="text" name="text" value={props.values.text} onChange={props.onChange}/>
      </label></div>
      <div><button type="submit">Translate</button></div>
    
    <div>
    {props.sith && <div className='translatedText'>
    {props.sith.contents && props.sith.contents.translated}
    </div>}
    {props.sith && <TextToSpeechContainer language={props.sith.contents.translated}/>}
    </div>
    </form>
    </div>
    <Link to='/'><button>Back</button></Link>
    </div>)

}