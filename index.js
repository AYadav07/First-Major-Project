const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// connecting to mongoose 
const db=require('./config/mongoos');

app.use(express.urlencoded());
app.use(cookieParser());



// use express router
app.use('/', require('./routes'));




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        //console.log('Error : ', err);
        console.log(`Error in running the server : ${err}`); // Interpolation
    }
    console.log(`Server is running on port : ${port}`);
})