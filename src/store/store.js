import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { articleListReducer } from '../reducers/articleList.js';
import { articleReducer } from '../reducers/article.js';

const reducer = combineReducers({
  articlesList: articleListReducer, //文章列表
  article: articleReducer, //文章详情
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;