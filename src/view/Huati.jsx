import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
// 提交表单请求
import { fetchTopics } from '../actions/fromDataAction.js';
// 监听 value
import { changeValueAction } from '../actions/changeValue.js';

import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';

class Huati extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      value: '',
      tab: '',
    }
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value,
    })
  }

  changeTab(e) {
    this.setState({
      tab: e.target.value,
    })
  }

  changValue(e) {
    this.setState({
      value: e.target.value,
    })
  }

  handleClickFromData() {
    this.props.fetchTopics('ed67084c-0ee8-4871-901e-8ce55740c4e7', this.state.tab, this.state.title, this.state.value);
    this.setState({
      title: '',
      value: '',
    })
  }

  render() {
    // console.log(this.props.value)
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
                <li>发布话题</li>
              </ul>
            </div>
            <div className="new-topic">
              <div className="topic_content">
                <div className="topic_post">
                  <fieldset>
                    <from id="create_topic_from" method="post">
                      <span>选择板块：</span>
                      <select name="tab" id="tab-value" onChange={this.changeTab.bind(this)}>
                        <option value="">请选择</option>
                        <option value="share">分享</option>
                        <option value="ask">问答</option>
                        <option value="job">招聘</option>
                        <option value="dev">客户端测试</option>
                      </select>
                      <textarea name="title" id="title" rows="1" onChange={this.changeTitle.bind(this)} value={this.state.title} placeholder="标题字数 10 字以上" />
                      <div className="markdown_text">
                        <div className="markdon_text--action">
                          <textarea onChange={this.changValue.bind(this)} value={this.state.value} className="markdown_editor" name="t_content" rows="20" />
                        </div>
                      </div>
                      <div className="editor_buttons">
                         <button onClick={this.handleClickFromData.bind(this)}>提交</button>
                      </div>
                    </from>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderAndFooter>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    fetchTopics: bindActionCreators(fetchTopics, dispatch),
    // changeValueing: bindActionCreators(changeValueAction, dispatch),
  })
)(Huati)