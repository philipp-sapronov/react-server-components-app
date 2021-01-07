import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, composedEnhancers);
export const persistor = persistStore(store);

export default store;
