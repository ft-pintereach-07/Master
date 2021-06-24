// import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import ArticleList from './Components/ArticleList';


const logout = () => { localStorage.removeItem('token')}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pintereach</h1>
        {/* <Link to='/register' component={Register}>Register</Link> */}
        </header>
      </div>
      <div>
        {localStorage.getItem('token') && <Link to='/protected'/>}
        <Link onClick={logout}>Logout Here</Link>
      </div>
      <div className='app-body'>
        <Switch>
          {/* <PrivateRoute exact path='/ArticleList' component={'ArticleList'} /> */}
            <Route path='/register' component={register}/>
            <Route component={register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
