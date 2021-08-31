import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Home, Test } from './inc'
import {Main} from './page/index.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host: '',
    }
  }

  componentDidMount() {
    this._getHost();
  }

  _getHost = async () => {
    const res = await axios.get('/api/host');
    this.setState({ host: res.data.host })
  }

  render() {
    return (
      <div className='App'>
        {/* <h3> Welcome to <u> {this.state.host} </u> Blog! </h3>
        <hr /> */}
        <BrowserRouter>
          <Route path="/" component={Home} exact/>
          
          <Switch>
            <Route path="/test/:data" component={Test} />
            <Route path="/test" component={Test} />
          </Switch>
          
          <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/test'> Test </Link> </li>
          </ul>
          <div>
            <Main />
          </div>
          
      
          
        </BrowserRouter>
        

      </div>
      
    )
  }
}

export default App;
