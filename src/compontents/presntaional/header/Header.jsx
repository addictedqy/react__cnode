import React from 'react';
import { Link } from 'react-router-dom';


const logo = require('./images/logo.svg');

class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="container container-w">
          <a className="login" href=""><img src={logo} /></a>
          <form className="search">
            <input type="text" name="search" />
          </form>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/getstart">新手入门</Link></li>
            <li><Link to="/api">API</Link></li>
            <li><Link to="/themes">关于</Link></li>
            <li><a href="">注册</a></li>
            <li><a href="">登录</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header