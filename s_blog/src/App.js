import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home, Test } from './inc'


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
          <Route path="/test" component={Test} />
          <Route path="/test/:data" component={Test} />
          

          <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/test'> Test </Link> </li>
          </ul>
          
        </BrowserRouter>

      </div>
      
    )
  }
}

export default App;
