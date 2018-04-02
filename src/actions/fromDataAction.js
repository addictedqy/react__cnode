// const loginHeader = new Headers();
// loginHeader.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

// export const fetchTopics = (params) => (dispatch) => {
//   dispatch({
//     type: 'FETCH_POST_TOPIC',
//   })

//   fetch('https://cnodejs.org/api/v1/topics', {
//     method: 'POST',
//     headers: loginHeader,
//     body: {
//       accesstoken: 'accesstoken' + params.accesstoken,
//       title: params.title,
//       tab: params.tab,
//       content: params.content,
//     }
//   })
//   .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       dispatch({
//         type: 'FETCH_POST_TOPIC_SUCCESS',
//         payload: data,
//       })
//   })
// }

export const PUBLISH_TOPIC = 'PUBLISH_TOPIC'

const loginHeader = new Headers();
loginHeader.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

export const fetchTopics = (accessToken,tab,title,content) => {
  return dispatch => {
    const postContent = `accesstoken=${accessToken}&tab=${tab}&content=${content}&title=${title}`
    // const postContent = 'accesstoken=' + accessToken + '&tab=' + tab + '&content=' + content + '&title=' + title
    fetch(`https://cnodejs.org/api/v1/topics`, {
            method: 'POST',
            headers: loginHeader,
            body: postContent,
        })
    .then(response => response.json())
      .then(data => {
        // console.log(data)
        dispatch({
          type: PUBLISH_TOPIC,
          success: data.success,
          topicId: data.topic_id,
    })
  })
  }
}
