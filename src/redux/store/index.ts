import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const middleware: any[] = [];

const getCompose = () => {
    if (process.env.NODE_ENV.trim() !== "production") {
      return composeWithDevTools(applyMiddleware(...middleware));
    } else {
      return applyMiddleware(...middleware);
    }
};

const getStore: () => Store = () => {
    const store: Store = createStore(
        rootReducer,
        {},
        getCompose()
    );

    return store;
}

export default getStore;