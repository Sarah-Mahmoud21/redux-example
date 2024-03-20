import {configureStore} from "@reduxjs/toolkit";
import {reducer as counterReducer} from "./slices/counter";
import {reducer as userReducer} from "./slices/user";

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
});
