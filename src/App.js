import React from 'react';
// import './App.css';
// import './css/mainPage.css'
import { Route } from 'react-router-dom'
import TranslateInputContainer from './components/TranslateInputContainer'
import SithInputContainer from './components/SithInputContainer';
import GunganInputContainer from './components/GunganInputContainer';
import MainPageContainer from './components/MainPageContainer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Route exact path='/' component={MainPageContainer}/>
          <Route exact path='/yodish' component={TranslateInputContainer}/>
          <Route exact path='/sith' component={SithInputContainer} />
          <Route exact path='/gungan' component={GunganInputContainer}/>
      </div>
    );
  }
}

export default App;