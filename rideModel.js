var mongoose = require('mongoose');
// Setup schema
var rideSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var ride = module.exports = mongoose.model('Ride', rideSchema);
module.exports.get = function (callback, limit) {
    ride.find(callback).limit(limit);
}