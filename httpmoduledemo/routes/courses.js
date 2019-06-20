const express = require('express')
const Joi = require('joi')
const myMiddleware = require('./middleware/mymiddleware')

const router = express.Router();

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

router.get('/', (req, res)=>{
    res.send(JSON.stringify(courses))
})

router.post('/', [myMiddleware], (req, res)=>{

    const newCourse = {
        courseId : courses.length+1,
        ...req.body
    }
    courses.push(newCourse)
    res.send(newCourse)
})

router.delete('/:id', (req,res)=>{
    // console.log(req.params.id)
    courses = courses.filter(c=>c.courseId !== req.params.id)
    res.send('Course Deleted...')
})

module.exports = router;