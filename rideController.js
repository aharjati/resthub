// Import contact model
Ride = require('./rideModel');
// Handle index actions
exports.index = function (req, res) {
    Ride.get(function (err, rides) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Rides retrieved successfully",
            data: rides
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var ride = new Ride();
    ride.name = req.body.name ? req.body.name : ride.name;
    ride.location = req.body.location;
    
// save the ride and check for errors
    ride.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New ride created!',
            data: ride
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Ride.findById(req.params.ride_id, function (err, ride) {
        if (err)
            res.send(err);
        res.json({
            message: 'Ride details loading..',
            data: ride
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Ride.findById(req.params.ride_id, function (err, ride) {
        if (err)
            res.send(err);
ride.name = req.body.name ? req.body.name : ride.name;
        ride.location = req.body.location;
// save the ride and check for errors
        ride.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Ride Info updated',
                data: ride
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Ride.remove({
        _id: req.params.ride_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Ride deleted'
        });
    });
};