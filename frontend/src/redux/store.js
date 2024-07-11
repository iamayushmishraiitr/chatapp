// store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import alluserReducer from "./alluserSlice";
import messagesReducer from "./messagesSlice";
import selectedUserReducer from "./selectedUserSlice";
import socketReducer from "./socketSlice";
// Persist configuration
const persistConfig = {
  key: "root", // specify a key for the persisted state
  storage,
  whitelist: ["token", "user", "allUsers"], 
};

// Combine reducers
const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  allUsers: alluserReducer,
  socket:socketReducer ,
  selectedUser: selectedUserReducer,
  messages: messagesReducer,
});

// Wrap rootReducer with persistReducer for the configured persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
