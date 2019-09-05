import * as React from 'react'
import TextToSpeechContainer from './TextToSpeechContainer';
export default function GunganInput (props){
  console.log(props.values)
  return(
    <div>
       <img src='https://library.kissclipart.com/20180907/zxw/kissclipart-jar-jar-binks-star-wars-clipart-jar-jar-binks-anak-4af7f7628da5cb57.png' alt='gungan'/>
       <div className='formDisplay'>
       <h1>GUNGAN</h1>
      <form onSubmit={props.onSubmit}>
      <div><label>
        Enter the text you want to translate to Gungan!:
        <input type="text" name="text" value={props.values.text} onChange={props.onChange}/>
      </label></div>
      <div><button type="submit">Translate</button></div>
    
    <div>
    {props.gungan && <div className='translatedText'>
    {props.gungan.contents && props.gungan.contents.translated}
    </div>}
    {props.gungan && <TextToSpeechContainer language={props.gungan.contents.translated}/>}
    </div>
    </form>
    </div>
    </div>)

}