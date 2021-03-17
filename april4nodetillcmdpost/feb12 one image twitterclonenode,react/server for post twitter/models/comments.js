const mongoose = require('mongoose');



const cmdShcema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
   

    comments:[ {

        cmusers: {
            type: mongoose.Schema.ObjectId, ref: 'User',
            required: true
        },
      
        commentsvalue: {
            type: String,
            default: ""
        },

    }],



    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }

});



let cmds = module.exports = mongoose.model('comments', cmdShcema);

