const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    username: {
        type: String,
        minlength: 5,
        maxlength: 15,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Fighter'
        }
    ]
})

userSchema.plugin(uniqueValidator)

//transform the db object returned to server
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v           
        delete returnedObject.passwordHash
    }
})

module.exports = mongoose.model('User', userSchema)