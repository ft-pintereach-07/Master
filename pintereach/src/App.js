// import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pintereach</h1>
        {/* <Link to='/register' component={Register}>Register</Link> */}
        </header>
      </div>
      <div className='app-body'>
        <Switch>
          {/* <PrivateRoute exact path='/' component={''} /> */}
            <Route path='/Register' component={Register}/>
            <Route component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
