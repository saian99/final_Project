const mongoose = require('mongoose');

const grubSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String
});

const Grub = mongoose.model('Grub', grubSchema);

module.exports = Grub;
