import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container is-flex is-justify-content-center">
          <header className="navbar">
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><a href="#"><Link to="/">Home</Link></a></li>
                  <li><a href="#"><Link to="/otherpage">Other Page</Link></a></li>
                </ul>
            </nav>
          </header>
        </div>
       
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
