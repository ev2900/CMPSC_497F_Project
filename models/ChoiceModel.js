var mongoose = require('mongoose');
var mySchema = mongoose.Schema({
  input_genome: String, 
  gff_file: String
});

var ChoiceModel = mongoose.model('ChoiceModel', mySchema);

module.exports = {
  ChoiceModel: ChoiceModel
};