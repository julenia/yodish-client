import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import TranslateInputContainer from './components/TranslateInputContainer'
import SithInputContainer from './components/SithInputContainer';


class App extends React.Component {
  render() {
    return (
      <div className="App">

          <Route exact path='/yodish' component={TranslateInputContainer}/>
          <Route exact path='/sith' component={SithInputContainer} />
      </div>
    );
  }
}

export default App;