const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/olympicsdb', ()=>{
    console.log('Connected to database successfully');
});

module.exports = mongoose;
