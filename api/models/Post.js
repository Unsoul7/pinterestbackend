const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOURI)

const PostSchema = mongoose.Schema({
    title : String,
    description : String,
    post : String,
    user : String
})

module.exports = mongoose.model('Post',PostSchema)