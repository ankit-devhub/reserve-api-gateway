const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ankit999221:hb7gNQwzQcdRooBf@reserveapp.ygyi8ka.mongodb.net/reserveAppDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection

module.exports = db