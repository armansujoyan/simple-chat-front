import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import rootReducer from "../reducers";
import { initSagas } from "./initSagas";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

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
    initSagas(sagaMiddleware);

    return store;
}

export default getStore;