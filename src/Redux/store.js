const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { rootReducer } = require("./rootReducer");

const middlewares = [logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;