let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
    artist:{
        type: String,
        // required: true
        
    },
    title:{
        type: String,
        // required:true
        
        
    },
    preview:{
       type: String,
        // required:true
    },
    id: {
        type: String,
    //    required:true
    },
    albumArt: {
        type: String,
        // required:true
    }
    
})


module.exports = mongoose.model(schemaName, schema)