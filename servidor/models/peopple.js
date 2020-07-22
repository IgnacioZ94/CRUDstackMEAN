const mongoose = require('mongoose');
const { Schema } = mongoose;

const PeoppleSchema = new Schema({
   name: { type: String, require: true },
   lastname: { type: String, require: true },
   email: { type: String, require: true },
   telefono: { type: Number, require: true },
});

module.exports = mongoose.model('Peopple', PeoppleSchema);