const { model, Schema } = require("mongoose");

const employeeSchema = new Schema({
  userName: String,
  title: String,
  description: String,
  company: String,
});

//Export model
module.exports = model("Employee", employeeSchema);
