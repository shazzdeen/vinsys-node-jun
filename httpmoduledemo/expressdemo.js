const express = require('express')
const courses = require('./routes/courses')

const morgan = require('morgan');

const app = express();

//add the middleware to parse the request body to make the json 
//data available with req.body
app.use(express.json())
app.use(express.urlencoded())
app.use('/api/courses', courses)

app.use(function(req, res, next){
    console.log('Authentication...')
    // code to authenticate user...
    next();
})

//app.use(morgan('tiny'))


app.get('/', morgan('tiny'), (req, res)=>{
    res.send('helloworld once again...')
})

const PORT = 4100;
app.listen(PORT);
console.log('listening to '+PORT)