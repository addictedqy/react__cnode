import React from 'react';
import ReactDom from 'react-dom';
// views
import Index from './view/Index.jsx';
import Api from './view/Api.jsx';
import Getstart from './view/Getstart.jsx';
import Themes from './view/Themes.jsx';
import Content from './view/Content.jsx';
import Landing from './view/Landing.jsx';
import Huati from './view/Huati.jsx';

import store from './store/store.js';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

require('./styles/App.scss');

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/api" component={Api} />
          <Route path="/getstart" component={Getstart} />
          <Route path="/themes" component={Themes} />
          <Route path="/content/:id" component={Content} />
          <Route path="/landing" component={Landing} />
          <Route path="/huati" component={Huati} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)