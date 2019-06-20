const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(()=>console.log('connected to mongodb...'))
    .catch(err=>console.log('Connection error ', err))

//define/create the schema
const coursesSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type:Date, default:Date.now},
    isPublished:Boolean
})

const Course = mongoose.model('Course', coursesSchema)

async function createCourse(){

        const course = new Course({
            name : 'MongoDB Course',
            author : 'Vishal',
            tags : ['mongodb', 'db'],
            isPublished:true
        })

        const result = await course.save()
        console.log(result)
}

//createCourse();

async function getCourses(){

        //eq
        //ne
        //gt
        //gte
        //lt
        //lte
        //in
        //nin

        const courses = await Course
                                .find({price:{$gte:1000, $lte:5000}})
                                .sort({name:1})
                                .select({name:1, author:1})

        console.log(courses)

}

getCourses();

