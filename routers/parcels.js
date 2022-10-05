const mongoose = require('mongoose');

// Access the model of Actor and Movie
const Sender = require('../models/senders.js');
const Parcel = require('../models/parcels.js');

module.exports = {

    
    getAll: function (req, res) {
        Parcel.find(function (err, parcel) {
            if (err) return res.status(400).json(err);
            res.json(parcel);
        });
    },


    getParcelByName: function (req, res) {
        let senderName = req.params.name;
        Sender.findOne({name: senderName}, function (err, sender) {
            const senderID = sender._id;
            Sender.findById(senderID).populate('parcel').exec(function(err, parcels){
                if (err) return res.status(400).json(err);
                if (!parcels) return res.status(404).json();
                res.json(parcels);
            });
        });
    },

    getParcelsByAddr: function(req, res){
        let addrDetails = req.query.addr;
        Parcel.find({address: addrDetails}).populate('sender', 'name').exec(function(err, senders){
            if (err) return res.status(400).json(err);
            if (!senders) return res.status(404).json();
            res.json(senders);
        });
    },

    updateAddrByID: function(req, res){
        let parcelID = req.body.parcelID;
        let updateAddr = req.body.newAddr;
        Parcel.findByIdAndUpdate(parcelID, {address:updateAddr}, function(err, parcel){
            if (err) return res.status(400).json(err);
            if (!parcel) return res.status(404).json();
            res.json(parcel);
        });
    },

    getTotalWeight: function(req, res){
        Parcel.aggregate([
            {
                $group: {
                    _id: "$sender",
                    totalWeight: {
                      $sum: "$weight"
                    }
                }
            }
        ], function(err, parcel){
            if (err) return res.status(400).json(err);
            if (!parcel) return res.status(404).json();
            res.json(parcel)
        });
    }
};