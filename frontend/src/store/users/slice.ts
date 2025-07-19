import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import userServices from "../../services/users";
import { AppDispatch } from "..";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserWithId>) => {
      return [...state, { ...action.payload }];
    },
    removeUser: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    updateUser: (state, action: PayloadAction<UserWithId>) => {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
    setUsers: (state, action: PayloadAction<UserWithId[]>) => {
      return action.payload;
    },
  },
});

export default usersSlice.reducer;
export const { removeUser, addUser, updateUser, setUsers } = usersSlice.actions;

export const createUserDataBase = (content: User) => {
  return async (dispatch: AppDispatch) => {
    const newUser = await userServices.createNew(content);
    dispatch(addUser(newUser));
  };
};

export const updateUserDataBase = (userToUpdate: UserWithId) => {
  return async (dispatch: AppDispatch) => {
    await userServices.update(userToUpdate);
    dispatch(updateUser(userToUpdate));
  };
};

export const removeUserDataBase = (userToDelete: UserId) => {
  return async (dispatch: AppDispatch) => {
    await userServices.remove(userToDelete);
    dispatch(removeUser(userToDelete));
  };
};
