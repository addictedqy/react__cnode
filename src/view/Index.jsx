import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import querystring from 'querystring';

//头部和尾部
import HeaderAndFooter from '../compontents/container/HeaderAndFooter.jsx';

//渲染网页
import { fetchArticleList } from '../actions/articleListAction.js';

import avatar from '../images/avatar_img.jpg';
import userAuthor from '../images/user_author.jpg';
import timeFlies from'../utils/dateformat.js';

class Index extends React.Component {
  componentDidMount() {
    this.props.fetchArticleList(this.renderPage());
  }

  // 当该组件的 props 改变之前执行
  componentWillReceiveProps(nextProps) {
    const currentSearch = this.props.location.search;
    const nextSearch = nextProps.location.search;
    if (currentSearch !== nextSearch) {
      this.props.fetchArticleList(querystring.parse(nextSearch.slice(1))); 
    }
  }
  
  goodAndtop(item) {
    // 如果 top 为 true 显示顶置
    // 如果 good 为 true 显示精华
    // 如果 top 和 good 都不为 true,根据 tab 显示相应的来源
    if (item.top === true) {
      return <span className="pop_top_good">置顶</span>
    }
    if (item.good === true) {
      return <span className="pop_nice_good">精华</span>
    }
    if (item.tab === 'share') {
      return <span className="pop_nice_share">分享</span>
    }
    if (item.tab === 'ask') {
      return <span className="pop_nice_share">问答</span>
    }
    return <span className="pop_nice_share">随缘</span>;
  }
  
  renderList(list) {
    return list.map((item, i) => {
      return (
        <div key={item.id} className="cell clearfix">
          <img src={item.author.avatar_url} alt="avatar" name="avatar"/>
          <div className="pop-top">
            <span className="user-big">{item.reply_count}</span>
            /
            <span className="user-small">{item.visit_count}</span>
          </div>
          { this.goodAndtop(item) }
          <Link className="pop_topic_text" to={"/content/" + item.id}>{item.title}</Link>
          <a className="user-right" href="">
            <img src={item.author.avatar_url} alt=""/>
            <span>{timeFlies(item.last_reply_at)}</span>
          </a>
        </div>
      )
    })
  }
  
  // 从querystring获取相关信息,并解析.
  // 获取页数跟标签信息.
  renderPage() {
    const obj = querystring.parse(this.props.location.search.slice(1)); 
    // '?page=1&tab=share' ==> {page: '1', tab: 'share'}
    // 初始化分页与标签信息
    let result = {
      page: 1,
      tab: 'all',
    };
    // 判断如果不为空，就覆盖掉初始化的值。
    if (obj.page !== undefined) {
      result.page = parseInt(obj.page);
    }
    if (obj.tab !== undefined) {
      result.tab = obj.tab;
    }
    return result;
  }
  // { page: x, tab: 'all'}

  render() {
    console.log(this.props)
    const paginationInfo = this.renderPage();  // { page: x, tab: 'all'}
    // 得到上一页页码
    const prev = paginationInfo.page === 1 ? 1 : paginationInfo.page - 1;
    // 得到下一页页码
    const next = paginationInfo.page + 1;

    return (
      <HeaderAndFooter>
        <div className="main container">
          <div className="content">
            <ul className="clearfix nav">
              <li><Link className={paginationInfo.tab === 'all' ? "list-active" : ''} to={"/?page=1&tab=all"}>全部</Link></li>
              <li><Link className={paginationInfo.tab === 'good' ? "list-active" : ''} to={"/?page=1&tab=good"}>精华</Link></li>
              <li><Link className={paginationInfo.tab === 'share' ? "list-active" : ''} to={"/?page=1&tab=share"}>分享</Link></li>
              <li><Link className={paginationInfo.tab === 'ask' ? "list-active" : ''} to={"/?page=1&tab=ask"}>问答</Link></li>
              <li><Link className={paginationInfo.tab === 'job' ? "list-active" : ''} to={"/?page=1&tab=job"}>招聘</Link></li>
            </ul>
            { this.renderList(this.props.articlesList) }
            <div className="pagin_menu container">
              <ul className="clearfix pagin_menu_active">
                <li><Link to={'/?page=' + prev + '&tab=' + paginationInfo.tab}>上一页</Link></li>
                <li><span className="pagin_number">{paginationInfo.page}</span></li>
                <li><Link to={'/?page=' + next + '&tab=' + paginationInfo.tab}>下一页</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </ HeaderAndFooter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articlesList: state.articlesList.list,
  }
}

const mapDispatchToProps = (disptach) => {
  return {
    fetchArticleList: bindActionCreators(fetchArticleList, disptach),
  }
}

export default connect(
  // state => ({articlesList: state.articlesList.list}),
  // mapStateToProps,
  // dispatch => ({
  //   fetchArticleList: bindActionCreators(fetchArticleList, dispatch),
  // })
  mapStateToProps,
  mapDispatchToProps,
)(Index);
