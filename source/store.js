import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleWare = applyMiddleware()(createStore);
const store = createStoreWithMiddleWare(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
