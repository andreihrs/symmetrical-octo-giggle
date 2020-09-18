var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema(
    {
        name: {type: String, required: true, maxlength: 200, unique: true},
        title: {type: String},
        description: {type: String},
        company: {type: String, required: true}
    }
);

//Export model
module.exports = mongoose.model('Employee', EmployeeSchema)