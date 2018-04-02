import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';

let friendA = require('../images/friend_1.png')
let friendB = require('../images/friend_2.png')
let friendC = require('../images/friend_3.png')
let friendD = require('../images/friend_4.png')
let friendE = require('../images/friend_5.png')
let friendF = require('../images/friend_6.png')
let friendG = require('../images/friend_7.png')

class Themes extends React.Component {
  render() {
    console.log(this.props.article)
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
              <li>关于</li>
            </ul>
          </div>
          <div className="new-topic">
            <div className="topic_content">
              <div className="topic_text">
                <h2>关于</h2>
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，
                   我们非常欢迎更多对 Node.js 感兴趣的朋友。
                </p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由 @alsotang 在维护，有问题请联系：
                  <a href="https://github.com/alsotang">https://github.com/alsotang</a>
                </p>
                <p>请关注我们的官网微博：
                  <a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a>
                </p>
                <h2>移动客户端</h2>
                <p>客户端由 <a href="javascript:">@soliury 开发维护</a></p>
                <p>源码地址：<a href="javescript:">https://github.com/soliury/noder-react-native</a></p>
                <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ HeaderAndFooter>
    )
  }
}

export default Themes