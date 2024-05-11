import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import GeneralReducer from "./general";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        general: GeneralReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;