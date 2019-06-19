const http = require('http')
const fs = require('fs')

const courses = ['Angular','React','NodeJS','VueJS']

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Helloworld!...")
       res.end();
    }

    if(req.url === '/courses'){
            //res.write(JSON.stringify(courses));
            fs.readFile('./courses.html', (err, data)=>{
                if(err) res.status(404).write('Resource is not available')

                res.write(data.toString())
                res.end();
            })
    }
})

// server.on('connection', ()=>{
//     console.log('New Connection....')
// })

server.listen(3000)
console.log('Listening to 3000...')