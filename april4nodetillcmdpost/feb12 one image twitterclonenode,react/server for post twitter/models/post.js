const mongoose = require('mongoose');

const mediaType = ["video", "image", ""];


const postSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    body: {
        type: String,
        trim: true,

    },
    visible: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.ObjectId, ref: 'User',
        required: true
    },
    location: {
        type: [Number],
        index: "2dsphere",
        default: [0, 0],
    },
    trendcount: {
        type: Number,
        default: 0


    },
    likes: [{
        type: mongoose.Schema.ObjectId, ref: 'User',
        required: true
    }],


    comments: {

        cmusers: {
            type: mongoose.Schema.ObjectId, ref: 'User',
        },
      
        commentsvalue: {
            type: String,
            default: ""
        },

        cmdtime: {
            type: Date,
            default: ""
        },
    
      

    },





    media: {

        mediatype: {
            type: String,
            enum: mediaType,
            default: '',
        },
        mediasource: {
            type: String,
            default: ""
        },

    },



    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }

});



let Post = module.exports = mongoose.model('Post', postSchema);

