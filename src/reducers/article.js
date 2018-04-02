// 渲染主题详情逻辑
const initTitleState = () => {
  return {
    title: {
      author: {
        loginname: '',
        avatar_url: '',
      },
      replies: [
        {
          reply_cout: '',
          tab: '',
          title: '',
          author: {
            loginname: '',
            avatar_url: '',
          }
        }
      ],
    },
    fetchange: 'SUCCESS',
  }
}

export const articleReducer = (state = initTitleState(), action) => {
  switch (action.type) {
    case 'ARTICLE_TITLE_LIST':
      return Object.assign({}, state, {
        fetchange: 'LOADING',
      })

    case 'ARTICLE_TITLE_LIST_SUCCESS':
      return Object.assign({}, state, {
        title: action.payload.data,
        fetchange: 'SUCCESS',
      })
  }
  return state;
}

