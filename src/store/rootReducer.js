import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducers as categories } from "../reducers/categories";
import { reducers as contacts } from "../reducers/contacts";
import { reducers as temp } from "../reducers/temp";

const domainsPersistConfig = {
  key: "domains",
  storage: storage,
  blacklist: ["temp", "categories"],
};

export default combineReducers({
  // domains: persistReducer(domainsPersistConfig, domains),
  categories,
  contacts,
  temp,
  // sidebar,
});
