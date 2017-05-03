const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const UserSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: String,
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
UserSchema.pre('save', function(next) {
    const user = this
    if(this.isNew) {
        this.meta.createAt = this.meta.updatedAt = Date.now()
    }
    else {
        this.meta.updatedAt = Date.now()
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)

            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err)
                user.password = hash
                next()
            })
    })
})

UserSchema.methods = {
    comparePassword: function (_password, cb) {
        bcrypt.compare(_password, this.password, (err, isMatch) => {
            if (err) return cb(err)
            cb(null, isMatch)
        } )
    }
}

// TODO CHANGE TO ES6 Fn
UserSchema.statics = {
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

module.exports = UserSchema