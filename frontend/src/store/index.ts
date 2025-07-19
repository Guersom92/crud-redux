import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { setUsers } from "./users/slice";
import formReducer from "./form/slice";
import userServices from "../services/users";

const persistanceLocalStorageMiddleWare: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("redux-state", JSON.stringify(store.getState()));
  };

export const store = configureStore({
  reducer: { users: usersReducer, form: formReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStorageMiddleWare),
});

userServices.getAll().then((users) => {
  store.dispatch(setUsers(users));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
