import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import EventLog from './components/Eventlog';
import Chat from './components/ChatMessages';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/eventlog" component={EventLog} />
            <Route path="/chatmessages" component={Chat} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
