import * as sagas from '../sagas';

export const initSagas = (sagaMiddleware: any) => {
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};