import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';

class Api extends React.Component {
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
              <li>API</li>
            </ul>
          </div>
          <div className="new-topic">
            <div className="topic_content">
              <div className="topic_text">
                <p>
                  以下 api 路径以<a href="https://cnodejs.org/api/v1">https://cnodejs.org/api/v1</a>为前缀
                </p>
                <h2>主题</h2>
                <h3>get /topics 主题首页</h3>
                <p>接收 get 参数</p>
                <ul className="menu">
                  <li>page Number 页数</li>
                  <li>tab String 主题分类。目前有 ask share job good</li>
                  <li>limit Number 每一页的主题数量</li>
                  <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                </ul>
                <p>示例：<a href="javascript:">/api/v1/topics</a></p>
                <h3>get /topic/:id 主题详情</h3>
                <p>接收 get 参数</p>
                <ul className="menu">
                  <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                  <li>
                    accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，
                    才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。
                  </li>
                </ul>
                <p>示例：<a href="javascripit:">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ HeaderAndFooter>
    )
  }
}

export default Api