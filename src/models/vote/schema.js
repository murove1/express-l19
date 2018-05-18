const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  isPositive: {
    type: Boolean,
    required: [true]
  },
  answerId: {
    type: ObjectId
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: [true]
  },
  createBy: {
    type: ObjectId
  }
});

module.exports = { schema };
