import axios from "axios";
import { User, UserId, UserWithId } from "../store/users/slice";

const baseUrl = "/api/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content: User) => {
  const response = await axios.post(baseUrl, content);
  return response.data;
};

const remove = async (id: UserId) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const update = async (editedUser: UserWithId) => {
  const response = await axios.put(`${baseUrl}/${editedUser.id}`, editedUser);
  return response.data;
};

export default { getAll, createNew, update, remove };
