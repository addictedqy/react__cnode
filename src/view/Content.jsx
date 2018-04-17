import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';
import avatarImg from '../images/avatar_img.jpg';
// 渲染主题详情
import { fetchTitleList } from '../actions/articleAction.js';

import timeFlies from'../utils/dateformat.js';

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchTitleList({id: this.props.match.params.id})
  }

  renderReply(list) {
    return list.map((item, i) => {
      return (
        <div className="cell" key={i}>
          <div className="user_name">
            <a className="user_avater" href=""><img src={item.author.avatar_url}/></a>
            <div className="user_info">
              <a className="reply_author" href="">{item.author.loginname} </a>
              <a className="reply_time" href="">{i + 1}楼 {timeFlies(item.create_at)}</a>
            </div>
            <div className="user_action">
              <span>
                <i>棒 </i>
                <span className="up_count">27</span>
              </span>
            </div>
          </div>
          <div className="reply_content">
            <div className="market_text">
              <p dangerouslySetInnerHTML={{__html: item.content}}>
                {/*渲染留言板内容*/}
              </p>
            </div>                  
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    const article = this.props.article;
    return (
      <HeaderAndFooter>
        <div className="main container">
          <div className="content">
            <div className="new-topic">
              <div className="content_header">
                <span className="topic_title_full">
                  <span className="topic_top_full">置顶</span>
                  {article.title}
                </span>
                <div className="changes_time">
                  <span>发布于 {timeFlies(article.last_reply_at)}</span>
                  <span>作者 {article.author.longinname}</span>
                  <span>{article.visit_count}次浏览</span>
                  <span>最后一次编辑是{timeFlies(article.create_at)}</span>
                  <span>来自 分享</span>
              </div>
              </div>
              <div className="content_main">
                <div className="topic_text" dangerouslySetInnerHTML={{__html: article.content}}>
                  {/*插入主题详情*/}
                </div>
              </div>
            </div>
            <div className="content_msg">
              <div className="header">
                <span>{article.replies.length} 回复</span>
              </div>
              {this.renderReply(article.replies)}
            </div>
          </div>
        </div>
      </HeaderAndFooter>
    )
  }
}

export default connect(
  state => ({article: state.article.title}),
  dispatch => ({
    fetchTitleList: bindActionCreators(fetchTitleList, dispatch),
  })
)(Content)