import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  values: { name: "", email: "", github: "" },
  openModal: false,
  userIdToEdit: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.values.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.values.email = action.payload;
    },
    setGithub: (state, action: PayloadAction<string>) => {
      state.values.github = action.payload;
    },
    toggleModal: (state) => {
      state.openModal = !state.openModal;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userIdToEdit = action.payload;
    },
    clearForm: () => {
      return initialState;
    },
  },
});

export default formSlice.reducer;

export const {
  setEmail,
  setName,
  setGithub,
  clearForm,
  toggleModal,
  setUserId,
} = formSlice.actions;
