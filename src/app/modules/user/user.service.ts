// creating a document using model (step4)

import { IUser } from "./user.interface";
import User from "./user.model";

// async function
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  const result = await user.save();
  console.log(user.fullName() + " created");
  return result;
};

export const getUsersFromDB = async () => {
  const user = await User.find();
  return user;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1, email: 1, _id: 0 });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
