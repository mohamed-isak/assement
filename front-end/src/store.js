import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/loginReducer";


const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});

export default store;