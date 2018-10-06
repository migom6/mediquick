import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default initialState => {
  const finaleCreateStore = compose(
    applyMiddleware(thunk),
    /* istanbul ignore next */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finaleCreateStore(reducers, initialState);

  return store;
};
