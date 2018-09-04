let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
    artist:{
        type: String,
        
    },
    title:{
        type: String,
        
        
    },
    preview:{
       type: String,
    
    },
    id: {
        type: String,
       
    },
    albumArt: {
        type: String,

    }
    
})


module.exports = mongoose.model(schemaName, schema)