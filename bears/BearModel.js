const mongoose = require('mongoose');

const BearSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
  },
  latinName: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: new Date(),
    required: true,
  },
});

const BearModel = mongoose.model('BearDocuments', BearSchema);

module.exports = BearModel;