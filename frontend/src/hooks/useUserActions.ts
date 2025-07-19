import {
  createUser,
  deleteUserById,
  editUser,
  type User,
  type UserId,
  type UserWithId,
} from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();
  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  const addUser = (user: User) => {
    dispatch(createUser(user));
  };

  const modifyUser = (user: UserWithId) => {
    dispatch(editUser(user));
  };

  return { removeUser, addUser, modifyUser };
};
