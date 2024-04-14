import firebase from "firebase-admin";
import { User } from "../Entities/UserEntity";

const user = firebase.database().ref("user");

export const getAllUser = async () => {
    return user.once("value")
}

export const getOneUser = async (id: string) => {

}

export const saveUser = async (docUser: User) => {
    return user.push(docUser);
}

export const updateUser = async (id: string, docUser: User) => {
    return user.child(id).update(docUser)

}

export const removeUser = async (id: string) => {
    return user.child(id).remove();
}