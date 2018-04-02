// 获取文章列表
export const fetchArticleList = (params) => (dispatch) => {
  dispatch({
    type: 'FETCHING_ARTICLE_LIST',
  });

  // 上一页，下一页。
  fetch('https://cnodejs.org/api/v1/topics?page='+ params.page + '&tab=' + params.tab)
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'FETCH_ARTICLE_LIST_SUCCESS',
          payload: data,
        })
      })
}
