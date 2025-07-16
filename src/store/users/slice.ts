import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
