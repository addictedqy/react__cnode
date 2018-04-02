import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { articleListReducer } from '../reducers/articleList.js';
import { articleReducer } from '../reducers/article.js';
import { landingReducer } from '../reducers/landing.js';
import { tokenReducer } from '../reducers/token.js';
import { fromDataReducer } from '../reducers/fromData.js';
import { changeValueReaducer } from '../reducers/changeValue.js';

const reducer = combineReducers({
  articlesList: articleListReducer, //文章列表
  article: articleReducer, //文章详情
  landing: landingReducer,
  accesstoken: tokenReducer,
  fromData: fromDataReducer,
  changeValue: changeValueReaducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;