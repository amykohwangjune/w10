const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const senders = require('./routers/senders.js');
const parcels = require('./routers/parcels.js');

var cors = require('cors')


const app = express();
app.use(cors())

app.listen(8080);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "dist/w10lab")));

mongoose.connect('mongodb://localhost:27017/wk10_lab', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');

});

//Configuring Endpoints

// Create a new sender. The new sender's name is sent through the request's body.  
app.post('/sender', senders.createOne);

// List all the senders
app.get('/senders',senders.getAll);


// Delete sender by ID. The id of the sender to delete is sent through the request's body.
app.delete('/sender/', senders.deleteOne);

// Add Parcel to Sender.
// The ID of the sender and an object representing the parcel's details are sent through the request's body.
app.put('/sender/addParcel', senders.addParcel);

// List all the parcels
app.get('/parcels', parcels.getAll);



// 1. Get all parcels from a sender.
app.get('/sender/:name', parcels.getParcelByName);

// Get all Parcels by Address: The address is sent through the URL query string.
app.get('/parcel/', parcels.getParcelsByAddr);

// // Update Parcel Address by ID
app.put('/parcel/updateAddr', parcels.updateAddrByID);

// Update sender's name by ID.
app.put('/sender/updateName', senders.updateOne);

// Get the total weight of all packages a sender have
app.get('/parcel/totalWeights', parcels.getTotalWeight);