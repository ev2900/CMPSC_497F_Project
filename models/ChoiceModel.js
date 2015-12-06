var mongoose = require('mongoose');
var userService = require('../services/index-service');
var mySchema = mongoose.Schema({
  input_genome: String, 
  gff_file: String
});

var ChoiceModel = mongoose.model('ChoiceModel', mySchema);

module.exports = {
  ChoiceModel: ChoiceModel
};