const mongoose = require('mongoose');

const toDoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    Default: Date.now,
  }

});

module.exports = mongoose.model('TodoTask', toDoTaskSchema);
