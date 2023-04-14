import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";

const reducerlist = combineReducers({
  auth: authReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducerlist);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});
export const persistor = persistStore(store);
