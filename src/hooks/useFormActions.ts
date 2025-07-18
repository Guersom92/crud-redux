import {
  clearForm,
  setEmail,
  setGithub,
  setName,
  setUserId,
  toggleModal,
} from "../store/form/slice";
import { useAppDispatch } from "./store";

export const useFormActions = () => {
  const dispatch = useAppDispatch();

  const changeName = (name: string) => {
    dispatch(setName(name));
  };

  const changeMail = (email: string) => {
    dispatch(setEmail(email));
  };

  const changeGithub = (github: string) => {
    dispatch(setGithub(github));
  };

  const setForm = (name: string, email: string, github: string) => {
    dispatch(setName(name));
    dispatch(setEmail(email));
    dispatch(setGithub(github));
  };

  const resetForm = () => {
    dispatch(clearForm());
  };

  const switchModal = () => {
    dispatch(toggleModal());
  };

  const setUserToEdit = (id: string) => {
    dispatch(setUserId(id));
  };
  return {
    changeName,
    changeGithub,
    changeMail,
    setForm,
    resetForm,
    switchModal,
    setUserToEdit,
  };
};
