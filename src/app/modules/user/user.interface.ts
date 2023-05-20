import { HydratedDocument, Model } from "mongoose";

// creating an user interface
export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email?: string;
  dateOfBirth?: string;
  gender: "male" | "female";
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// static methods
// export interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }

// creating an instance user interface for user methods
export interface IUserMethods {
  fullName(): string;
}

// static user interface for user model
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
