import React from 'react';
import ReactDom from 'react-dom';

let footerOne = require('./images/footer_1.jpg');
let footerTwo = require('./images/footer_2.jpg');
let footerThree = require('./images/footer_3.jpg');

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-add">
            <a className="dark" href="">RSS</a> | <a className="dark" href="">源码地址</a>
          </div>
          <div>
            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p>服务器赞助商为 
              <a href=""><img width="92" src={footerOne} /> , </a>存储赞助商为 
              <a href="">
                <img width="115" src={footerTwo} />
              </a> , 由<a href=""> 
              <img width="166" height="64" src={footerThree} /></a>提供应用性能服务。
            </p>
            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer