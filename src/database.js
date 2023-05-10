const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://MorenoAlfonso:Maximilianis1@cluster0.swajund.mongodb.net/?retryWrites=true&w=majority")
.then((result) => {console.log("Mongodb conected")})
.catch((err) => {console.err(err)});