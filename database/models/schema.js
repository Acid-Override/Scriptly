const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  body: String,
  version: Number,

})

const embeddedSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  messages: [messageSchema]
})

const Embedded = mongoose.model('Embedded', embeddedSchema);

module.exports = Embedded