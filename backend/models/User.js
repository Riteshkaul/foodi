const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema Modeling
const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    trim: true,
    minLength: 3,
  },
  photoURL: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
