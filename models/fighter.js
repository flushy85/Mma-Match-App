const mongoose = require('mongoose')

const fighterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    rank: String,
    weight: String
})


fighterSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Fighter', fighterSchema)