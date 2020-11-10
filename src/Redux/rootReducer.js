const { combineReducers } = require("redux");
const { userReducer } = require("./UserAuth/UserReducer");

export const rootReducer = combineReducers({
    user : userReducer
})