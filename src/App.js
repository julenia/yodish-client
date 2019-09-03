import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import TranslateInput from './components/TranslateInputContainer'


class App extends React.Component {
  render() {
    return (
      <div className="App">

          <Route exact path='/' component={TranslateInput}/>
          {/* <Route path='/event/:id' component={EventsDetailsContainer} />
          <Route path='/ticket/:id' component={TicketDetailsContainer} /> */}
      </div>
    );
  }
}

export default App;