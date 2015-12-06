var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var indexService = require('../services/index-service');

var indexSchema = new Schema({
  input_genome: {type:String, require: 'Please enter a genome'}, 
  gff_file: {type:String, require: 'Pleae enter a gff'}
});

var ChoiceModel = mongoose.model('ChoiceModel', indexSchema);

module.exports = {
  ChoiceModel: ChoiceModel
};