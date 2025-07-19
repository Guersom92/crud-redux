import {
  createUserDataBase,
  removeUserDataBase,
  updateUserDataBase,
  type User,
  type UserId,
  type UserWithId,
} from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id: UserId) => {
    dispatch(removeUserDataBase(id));
  };

  const addNewUser = (user: User) => {
    dispatch(createUserDataBase(user));
  };

  const modifyUser = (user: UserWithId) => {
    dispatch(updateUserDataBase(user));
  };

  return { removeUser, addNewUser, modifyUser };
};
