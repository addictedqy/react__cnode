// 用户登陆
export const fetchLanding = (params) => (dispatch) => {
  dispatch({
    type: 'FECHING_LADING',
  })

  fetch('https://cnodejs.org/api/v1/user/' + params.loginname, {
    method: 'GET',
  })
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'FETCH_LADING_SUCCESS',
          payload: data,
        })
      })
}

// 验证 accesstoken, 并获取用户资料详情
const loginHeader = new Headers();
loginHeader.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

export const postLanding = (params) => (dispatch) => {
  dispatch({
    type: 'FETCHING_LADING_POST',
  });
  fetch('https://cnodejs.org/api/v1/accesstoken', {
    method: 'POST',
    headers: loginHeader,
    body: 'accesstoken=' + params.accesstoken,
  })
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'FETCH_LADING_POST_SUCCESS',
          payload: data,
        })
        dispatch({
          type: 'SET_TOKEN',
          payload: '',
        })
        if (data.success === true) {
          dispatch({
            type: 'SET_TOKEN_SIGNOUT',
            payload: params.accesstoken,
          })
        } else {
          dispatch({
            type: 'ERROR',
            payload: data.error_msg,
          })
        }
      })
}
