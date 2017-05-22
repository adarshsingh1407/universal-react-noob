import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App-header">
        <img src="https://s3-ap-south-1.amazonaws.com/dauble-abcplusd/web-assets/images/logo.png"
          className="App-logo" alt="logo"/>
        <Link to='/'>Home</Link>&nbsp;|&nbsp;
        <Link to='/collector'>Collector</Link>&nbsp;|&nbsp;
        <Link to='/collector/39'>Adarsh</Link>
      </div>
    );
  }
}

export default Header
