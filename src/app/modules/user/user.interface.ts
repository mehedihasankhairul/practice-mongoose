import { Model } from "mongoose";

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
export interface UserModel extends Model<IUser> {
  getAdminUsers(): Promise<IUser[]>;
}

// creating an instance user interface for user methods
export interface IUserMethods {
  fullName(): string;
}
