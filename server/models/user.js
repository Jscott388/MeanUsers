var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    favoriteLang: {type: String},
    location: {type: String}
}, {timestamps: true})
module.exports = mongoose.model("User", UserSchema);
