const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  priority: String,
  assignees: [String],
  progress: {
    type: String,
    default: '0%',
  },
});

module.exports = mongoose.model('Task', taskSchema);
