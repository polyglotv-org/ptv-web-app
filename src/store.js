import {createStore, applyMiddleware, compose} from "redux";
import {connectRouter} from 'connected-react-router';
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware"
import rootReducer from './reducer';

export default function configureStore(history) {
  // Enable Redux Dev Tools extension
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  return createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
      applyMiddleware(
        promise(),
        thunkMiddleware
      )
    )
  );
}
