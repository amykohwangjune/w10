const mongoose = require('mongoose');

// Upper case means a class
// If the auto in id is not set to true then you need to set the id manually
const senderSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        require: true
    },
    parcel: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Parcel'
    }]
});

// module.exports
module.exports = mongoose.model('Sender', senderSchema);