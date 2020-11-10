import { UserTypes } from "./userTypes";

const UserState = {
    currentUser : null
}



export const userReducer = (state=UserState,action) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser : action.payload
            }
        default :
            return state
    }
};