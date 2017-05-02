const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
    artist: String,
    title: String,
    released: Number,
    genre: String,
    format: String,
    lable: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },   
        updatedAt: {
            type: Date,
            default: Date.now()
        }        
    }
})

//TODO CHANGE TO ES6
AlbumSchema.pre('save', function(next) {
    if(this.isNew) {
        this.meta.createAt = this.meta.updatedAt = Date.now()
    }
    else {
        this.meta.updatedAt = Date.now()
    }
    next()
})

// TODO CHANGE TO ES6 Fn
AlbumSchema.statics = {
    fetch: function (cb) {
            return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .sort('meta.updateAt')
            .exec(cb)
    }
}

module.exports = AlbumSchema