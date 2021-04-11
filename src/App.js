import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

import { Home, Page, Login } from './pages'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/pageone'>Page 1</NavLink></li>
            <li><NavLink to='/pagetwo'>Page 2</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/pageone'>
            <Page page='1' />
          </Route>
          <Route path='/pagetwo'>
            <Page page='2' />
          </Route>
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
