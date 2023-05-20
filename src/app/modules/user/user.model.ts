import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;

// creating a schema using interface  (step2)
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String },
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// creating a method (step5)
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// creating a model using schema (step3)
const User = model<IUser, UserModel>("User", userSchema);

export default User;
