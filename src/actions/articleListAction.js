// 异步Action
export const fetchArticleList = (params) => (dispatch) => {
  dispatch({
    type: 'FETCHING_ARTICLE_LIST',
  });

  fetch('https://cnodejs.org/api/v1/topics?page='+ params.page + '&tab=' + params.tab)
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'FETCH_ARTICLE_LIST_SUCCESS',
          payload: data,
        })
      })
}

// export const fetchArticleList = function(params) {
//   return function(dispatch) {
//     dispatch({
//       type: 'FETCHING_ARTICLE_LIST',
//     });

//     fetch('https://cnodejs.org/api/v1/topics')
//       .then(function(response) {
//         return response.json();
//       }).then(function(data) {
//         dispatch({
//           type: 'FETCH_ARTICLE_LIST_SUCCESS',
//           payload: data,
//         })
//       })
//   }
// }