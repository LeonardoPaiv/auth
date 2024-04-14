import { User } from "../Entities/UserEntity";
import {
  getAllUser,
  removeUser,
  saveUser,
  updateUser,
} from "../repository/UserRepository";

export const readAll = async () => {
  try {
    const snapshot = await getAllUser();
    return snapshot;
  } catch (e) {
    return e;
  }
};

export const createUser = async (docUser: User) => {
  try {
    const newUser = await saveUser({ email: "leonardo@gmail.com" });
    return newUser;
  } catch (e) {}
};

export const updateUserService = async (docUser: User) => {
  try {
    console.log(docUser);
    const updatedUser = await updateUser("", { email: "leonardo@gmail.com" });
    return updatedUser;
  } catch (e) {}
};

export const deleteUser = async () => {
  try {
    await removeUser("a");
    return { message: "User vanished" };
  } catch (e) {}
};
