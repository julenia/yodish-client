import * as React from 'react'
export default function SithInput (props){
  console.log(props)
  return(
    <div><form onSubmit={props.onSubmit}>
      <div><label>
        Enter the text you want to translate to sith!:
        <input type="text" name="text" value={props.values.text} onChange={props.onChange}/>
      </label></div>
      <div><button type="submit">Translate</button></div>
    </form>
    <div>
    {props.sith && <div className='translatedText'>
    {props.sith.contents && props.sith.contents.translated}
    </div>}
    </div>
    </div>)

}