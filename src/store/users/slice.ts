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

const DEFAULT_STATE = [
  { id: "1", name: "Jorge", email: "hugo@gmail.com", github: "jorHugo" },
  {
    id: "2",
    name: "Luis",
    email: "luis88@gmail.com",
    github: "CAFE",
  },
  {
    id: "3",
    name: "Rolo",
    email: "lio@hotmail.com",
    github: "guersom92",
  },
];

let initialState: UserWithId[] = DEFAULT_STATE;
const persistedState = localStorage.getItem("redux-state");

if (persistedState) {
  initialState = JSON.parse(persistedState).users;
}

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
  },
});

export default usersSlice.reducer;
export const { deleteUserById, createUser, editUser } = usersSlice.actions;
