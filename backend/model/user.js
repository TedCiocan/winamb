import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, minlength: 3, maxlength: 32, trim: true, unique: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true, match: /^\S+@\S+\.\S+$/ },
    password: { type: String, required: true, minlength: 6, select: false }
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User; // <-- ESM default export
