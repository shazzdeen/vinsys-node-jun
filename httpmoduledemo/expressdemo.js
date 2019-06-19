const express = require('express')
const Joi = require('joi')
const morgan = require('morgan');

const schema = {
    courseId : Joi.number().integer(),
    cName : Joi.string().min(3).required(),
    duration : Joi.string().required(),
    fees : Joi.number().integer().required()
}

let courses = [
    {courseId:101, cName:'Angular', duration: '5 Days', fees:300.00},
    {courseId:102, cName:'React', duration: '2 Days', fees:300.00},
    {courseId:103, cName:'Express', duration: '4 Days', fees:300.00},
    {courseId:104, cName:'MongoDB', duration: '6 Days', fees:300.00},
    {courseId:105, cName:'NodeJS', duration: '7 Days', fees:300.00},
]

const app = express();

const myMiddlware = (req, res, next)=>{
    console.log('myMiddleware...')
    const {error} = Joi.validate(req.body, schema, {abortEarly:false})
    if(error){
        let msg = '';
        for(let obj of error.details)
            msg += obj.message + '\n'
        return res.status(400).send(msg)
    }
    next();
}

//add the middleware to parse the request body to make the json 
//data available with req.body
app.use(express.json())
app.use(express.urlencoded())

app.use(function(req, res, next){
    console.log('Authentication...')
    // code to authenticate user...
    next();
})

//app.use(morgan('tiny'))


app.get('/', morgan('tiny'), (req, res)=>{
    res.send('helloworld once again...')
})

app.get('/api/courses', (req, res)=>{
    res.send(JSON.stringify(courses))
})

app.post('/api/courses', [myMiddlware], (req, res)=>{

    const newCourse = {
        courseId : courses.length+1,
        ...req.body
    }
    courses.push(newCourse)
    res.send(newCourse)
})

app.delete('/api/courses/:id', (req,res)=>{
    // console.log(req.params.id)
    courses = courses.filter(c=>c.courseId !== req.params.id)
    res.send('Course Deleted...')
})

const PORT = 4100;
app.listen(PORT);
console.log('listening to '+PORT)