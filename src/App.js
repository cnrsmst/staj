import './App.css';
import Login from './Login';
import Navbar from './Navbar'
import Anasayfa from './Anasayfa';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Profile from './Profile';

function App() {
  return (
    <div className='App'>
          
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Anasayfa} /> 
          <Route  path='/login' component={Login} />
          <Route  path='/create' component={Home} />
          <Route  path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
