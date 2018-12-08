import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import Search from './routes/Search';
import NoMatch from './routes/NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username/:password" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/me" component={MyPage} />
          <Route path="/search" component={Search} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;






















// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
