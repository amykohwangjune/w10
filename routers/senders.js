const mongoose = require('mongoose');

// Access the model of Sender and Parcel
const Sender = require('../models/senders.js');
const Parcel = require('../models/parcels.js');

module.exports = {

    getAll: function (req, res) {
        Sender.find(function (err, sender) {
            if (err) return res.status(400).json(err);
            res.json(sender);
        });
    },

    createOne: function (req, res) {
        let newSenderDetails = req.body;
        newSenderDetails._id = new mongoose.Types.ObjectId();
        let sender = new Sender(newSenderDetails);
        sender.save(function (err) {
            res.json(sender);
        });
    },

    deleteOne: function (req, res) {
        let SenderID = req.query.senderID;
        // let SenderDetails = req.body;
        // let SenderID = SenderDetails.senderID;
        Sender.findByIdAndDelete(SenderID, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },

    updateOne: function (req, res) {
        let senderDetails = req.body;
        let SenderID = senderDetails.senderID;
        let updateDetails = {
            $set: {
                name: senderDetails.name,
            },
        };
        Sender.findByIdAndUpdate(SenderID, updateDetails, function(err, sender){
            if (err) return res.status(400).json(err);
            if (!sender) return res.status(404).json();

            res.json(sender);
        });

    },

    addParcel: function (req, res) {
        let addDetails = req.body;
        let SenderID = addDetails.senderID;

        Sender.findById(SenderID, function (err, sender) {
            if (err) return res.status(400).json(err);
            if (!sender) return res.status(404).json();

            let parcelDetails = req.body.parcel;
            parcelDetails._id = new mongoose.Types.ObjectId();
            let newParcel = new Parcel(parcelDetails);
            newParcel.sender = SenderID;
            newParcel.save(function (err) {
                if (err) return res.status(400).json(err);
                sender.parcel.push(parcelDetails._id);
                sender.save(function(err){
                    if (err) return res.status(500).json(err);
                    if (sender.parcel.length>1){
                        res.json(sender);
                    }else{
                        Sender.findById(SenderID).populate('parcel').exec(function(err, sender){
                            if (err) return res.status(404).json(err);
                            res.json(sender);
                        })
                    }
                })
            });
        });
    }
};