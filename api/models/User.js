const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOURI)

const UserSchema = mongoose.Schema({
    fullname : String,
    email : {
        type : String,
        unique : true
    },
    username : {
        type : String,
        unique : true
    },
    password : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }],
    dp : String
})

module.exports = mongoose.model('User',UserSchema)