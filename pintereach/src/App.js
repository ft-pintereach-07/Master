import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const Register = styled.button`
  background-color: #161B22,
  color: white,
  align-items: center;
`


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pintereach</h1>
        <Register className='register-btn'>Register</Register>
        </header>
      </div>
    </Router>
  );
}

export default App;
