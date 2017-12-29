import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';

class Getstart extends React.Component {
  render() {
    return (
      <HeaderAndFooter>
        <div className="content">
          <div className="panel container">
            <div className="header">
              <ul className="nav">
                <li>
                  <Link to="/">主页</Link>
                  <span>/</span>
                </li>
                <li>Node.js新手入门</li>
              </ul>
            </div>
            <div className="new-topic">
              <div className="topic_content">
                <div className="topic_text">
                  <h2>Node.js 入门</h2>
                  <p>《快速搭建 Node.js开发环境以及加速 npm》</p>
                  <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
                  <p>Node.js 包教不包会</p>
                  <p><a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
                  <p>ECMAScrpit 6入门</p>
                  <p><a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ HeaderAndFooter>
    )
  }
}

export default Getstart