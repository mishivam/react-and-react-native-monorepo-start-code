import { createStore,  applyMiddleware} from "redux";
// import logger from "redux-logger";

import rootReducer from '../reducers';

const middleWare = []
export const store = createStore(rootReducer(), applyMiddleware(...middleWare));