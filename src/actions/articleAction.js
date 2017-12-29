import getStrLength from '../utils/getQueryStringArgs.js';

export const fetchTitleList = (params) => (dispatch) => {
  dispatch({
    type: 'ACTICLE_TITLE_LIST',
  })

  fetch('https://cnodejs.org/api/v1/topic/' + params.id)
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'ARTICLE_TITLE_LIST_SUCCESS',
          payload: data,
        })
      })
}
