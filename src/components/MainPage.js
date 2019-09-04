import * as React from 'react'
import { Link } from 'react-router-dom'
export default function MainPage (props){
  return(
    <div className='mainPage'>
      <h1>Welcome to the StarWars languages translation app</h1>
      <h2>Choose the language:</h2>
      <Link to='/yodish'><img src='https://www.pngfind.com/pngs/m/23-238211_yoda-star-wars-transparent-background-png-star-wars.png' alt='yoda'/></Link>
      <Link to='/sith'><img src='https://cdn.imgbin.com/0/4/1/imgbin-star-wars-the-old-republic-star-wars-roleplaying-game-sith-galactic-republic-games-XaU6RmXGZHpjTXDHmu1JJQDF5.jpg' alt='sith'/></Link>
      <Link to='/gungan'><img src='https://img.pngio.com/jar-jar-binks-star-wars-the-clone-wars-obi-wan-kenobi-gungan-jar-jar-binks-png-900_1280.jpg' alt='gungan'/></Link>
    </div>
    )

}