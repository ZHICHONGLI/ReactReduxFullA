const mongoose = require('mongoose')
const AlbumSchema = require('../schema/albums')
const Album = mongoose.model('Album', AlbumSchema)

module.exports = Album