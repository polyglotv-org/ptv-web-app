import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from 'history';
import configureStore from './store';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Lesson from "./pages/lesson";
import Account from "./pages/account";
import EditLesson from "./pages/editor/edit";
import CreateLesson from "./pages/editor/create";

const history = createBrowserHistory();
const store = configureStore(history);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/lesson/:id" component={Lesson}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/editor/edit/:id" component={EditLesson}/>
        <Route exact path="/editor/create" component={CreateLesson}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
