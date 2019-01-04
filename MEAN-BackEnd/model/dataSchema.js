var mongoose= require('mongoose');

var noteSchema=mongoose.Schema({
    title :{type :String},
    dec :{ type :String},
    creation_dt:{type:Date, require:true}


});
 

module.exports=mongoose.model("notes",noteSchema);
