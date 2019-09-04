import * as React from 'react'
export default function GunganInput (props){
  console.log(props.values)
  return(
    <div><form onSubmit={props.onSubmit}>
      <div><label>
        Enter the text you want to translate to Gungan!:
        <input type="text" name="text" value={props.values.text} onChange={props.onChange}/>
      </label></div>
      <div><button type="submit">Translate</button></div>
    </form>
    <div>
    {props.gungan && <div className='translatedText'>
    {props.gungan.contents && props.gungan.contents.translated}
    </div>}
    </div>
    </div>)

}