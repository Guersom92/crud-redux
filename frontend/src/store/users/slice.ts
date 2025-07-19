import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    createUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { ...action.payload, id }];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    editUser: (state, action: PayloadAction<UserWithId>) => {
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
export const { deleteUserById, createUser, editUser, setUsers } =
  usersSlice.actions;
