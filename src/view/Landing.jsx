import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchLanding, postLanding } from '../actions/landingAction.js';

import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';

class Landing extends React.Component {
  landing() {
    this.props.login({
      accesstoken: 'ed67084c-0ee8-4871-901e-8ce55740c4e7',
    })
  }
  componentWillReceiveProps(newProps) {
    if (this.props.landing.title.loginname !== newProps.landing.title.loginname) {
      this.props.fetchLanding({loginname: newProps.landing.title.loginname})
    }
  }

  renderLogin() {
    if (this.props.token === '') {
      return (
        <div className="content">
          <div className="panel container">
            <div className="header">
              <ul className="nav">
                <li>
                  <Link to="/">主页</Link>
                  <span>/</span>
                </li>
                <li>登陆</li>
              </ul>
            </div>
            <div className="new-topic">
              <div className="topic_content">
                <div className="topic_text">
                  <div className="signin_from clearfix">
                    <div className="signin-group clearfix">
                      <label className="signin-label">accesstoken</label>
                      <input className="signin_input" type="text" />
                    </div>
                  </div>
                  <div className="from-actions">
                    <span className="from-landing" onClick={this.landing.bind(this)}>登陆</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="content">
          <div className="panel container">
            <div className="header">
              <ul className="nav">
                <li>
                  <Link to="/">主页</Link>
                  <span>/</span>
                </li>
                <li>{this.props.landing.title.loginname}</li>
              </ul>
            </div>
            <div className="new-topic">
              <div className="topic_content">
                <div className="topic_text">
                  <div className="user_avatar">
                    <img className="topic_avatar" src={this.props.landing.title.avatar_url}/>
                    <span>{this.props.landing.title.loginname}</span>
                  </div>
                  <Link to="/huati"><span className="span-success">发布话题</span></Link>
                  <p>0 积分</p>
                  <p>注册时间 7 天前</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel container">
            <div className="header">最近创建的话题</div>
            <div className="new-topic">
              <div className="topic_text">
                <p>无话题</p>
              </div>
            </div>
          </div>
          <div className="panel container">
            <div className="header">最近参与的话题</div>
            <div className="new-topic">
              <div className="topic_text">
                <p>无话题</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <HeaderAndFooter>
        {this.renderLogin()}
      </ HeaderAndFooter>
    )
  }
}

export default connect(
  state => ({
    landing: state.landing,
    token: state.accesstoken,
  }),
  dispatch => ({
    fetchLanding: bindActionCreators(fetchLanding, dispatch),
    login: bindActionCreators(postLanding, dispatch)
  })
)(Landing)
