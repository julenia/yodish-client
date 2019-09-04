import * as React from 'react'
import { Link } from 'react-router-dom'
import '../css/mainPage.css'

export default function MainPage (props){
  return(
    <div className='mainPage'>
      <h1>Welcome to the Star Wars languages translation app</h1>
      <h2>Choose the language:</h2>
      <Link to='/yodish'><img src='https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png' alt='yoda'/></Link>
      <Link to='/sith'><img src='https://img.pngio.com/darth-maul-png-by-gasa979-on-deviantart-darth-maul-png-535_1122.png' alt='sith'/></Link>
      <Link to='/gungan'><img src='https://library.kissclipart.com/20180907/zxw/kissclipart-jar-jar-binks-star-wars-clipart-jar-jar-binks-anak-4af7f7628da5cb57.png' alt='gungan'/></Link>
    </div>
    )

}