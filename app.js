const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const main = require('./routes/main');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api', main);


app.get('/', (req,res)=>{
    res.json({message: "Invalid Endpoint"});
});


//express server
app.listen(port, (err)=>{
        if(err) throw err;
        console.log("Server running on port "+ port);
});