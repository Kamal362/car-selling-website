const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// modeling user details 
let user = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    location: {
      type: String
    }
  },
  { collection: "Employees" }
);

module.exports = mongoose.model("employees", user);