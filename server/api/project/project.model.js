'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  userId: String,
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Project', ProjectSchema);