const mongoose = require('mongoose');

// Upper case means a class
// If the auto in id is not set to true then you need to set the id manually
const parcelSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: 'Sender'
    },
    address: {type:String,
        validate:{
            validator: function(anAddr){
                return (anAddr.length >= 3)
            },
            message: 'Invalid String length'
        }
    },
    weight: {type:Number,
        validate:{
            validator: function(aWeight){
                return (aWeight > 0)
            },
            message: 'Weight must be greater than 0kg.'
        }
    },
    fragile: Boolean
});

// 1st parameter: Name of the collection (Collection car is save in the database)
// 2nd parameter: 
module.exports = mongoose.model('Parcel', parcelSchema);