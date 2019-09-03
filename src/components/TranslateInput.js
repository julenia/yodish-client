import * as React from 'react'
export default function TranslateInput (props){
  return(
    <div><form onSubmit={props.onSubmit}>
      <div><label>
        Enter the text you want to translate to yodish!:
        <input type="text" name="text" value={props.values.translate} onChange={props.onChange}/>
      </label></div>
      <div><button type="submit">Translate</button></div>
    </form>
    <div>
    {props.yodish && <div className='translatedText'>
    {props.yodish.contents ? props.yodish.contents.translated : props.yodish.yodish}
    </div>}
    </div>
    </div>)

}