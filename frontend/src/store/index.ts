import { configureStore, } from "@reduxjs/toolkit";
import usersReducer, { setUsers } from "./users/slice";
import formReducer from "./form/slice";
import userServices from "../services/users";



export const store = configureStore({
  reducer: { users: usersReducer, form: formReducer }
});

userServices.getAll().then((users) => {
  store.dispatch(setUsers(users));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
