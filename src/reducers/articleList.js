// 渲染主题列表逻辑
const initState = () => {
  return {
    list: [],
    fetchState: 'SUCCESS' // LOADING FAIL SUCCESS
  }
}

export const articleListReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'FETCHING_ARTICLE_LIST':
      return Object.assign({}, state, {
        fetchState: 'LOADING'
      });
    case 'FETCH_ARTICLE_LIST_SUCCESS':
      return Object.assign({}, state, {
        list: action.payload.data,
        fetchState: 'SUCCESS',
      });
  }
  return state;
}

// export const articleReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'FETCH_ARTICLE_LIST_SUCCESS': 
//       return action.payload.data;
//   }
//   return state;
// }