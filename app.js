require('dotenv').config()
const express = require('express')

const taskRouter = require('./Routes/taskRouter')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require ('cors')




const app = express()
const port = process.env.PORT || 3000

// const port = 3000

// GET
// POST 
// PATCH/PUT 
// DELETE

// urls - endpoints
// tasks - all of the task - GET
// task/create - create a new task - POST
// task/id -each task -GET
// tasks/id - each task - DELETE
// task/id - delete task -PATCH

const dbURI =`${process.env.DB_URL}`;

app.use(morgan("dev"));
app.use(cors())

app.use(express.json()) //converts incoming request.body

// app.use((req, res, next)=>{
//     console.log('i run everytime...');
//     next();
// });

app.use('/tasks',taskRouter)

// app.get('/task',(req,res)=>{
   
//     console.log('a request just came in...');
//     res.status(200).json({Title: 'All task on the DB'})
// });




// app.post('/tasks/create',(req, res)=>{
//     console.log('a post request just came in');
//     res.status(200).json({title:'create a new task'})
// });


// app.get('/tasks/id',(req,res)=>{
//     res.status(400).json({title: 'Get Each Task'})
// })

app.use((req, res)=>{
    res.status(404).json({message: 'url not found'})
});


// middlewares


const start = async () => {
    try{
        await mongoose.connect(dbURI);
        console.log('DB connected!');
        app.listen(port, console.log('server is now running on port 3000'))
    } catch (error){
        console.log(error);
        console.log("coudnt connected because");
    }
    
} 




start();













