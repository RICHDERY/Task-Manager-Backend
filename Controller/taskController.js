
const Task = require('../Models/Task');

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({})
    
    res.status(200).json ({ tasks });
};

const createTask = async (req, res) =>{
    // console.log(req.body);

    try {
        const task = await Task.create(req.body)
        res.status(200).json({message: "Task create succefully"});
        
    } catch (error) {
        res.status(400).json({message: "wrong data sent"});
        
    }
    
   
}

const getEachTask = async (req, res)=>{
    console.log(req.params.id);
    const task = await Task.findOne({_id: req.params.id})
    if (!task){
        res.status(404).json({message:`No task with ID:${req.params.id}` });
        return;
    }
        res.status(200).json(task);

    }

    const deleteTask = async ()=>{
        const task = await task.findOneAndDelete ({ _id: req.params.id });
        if (!task) {
            res.status(404).json({message:`No task with ID:${req.params.id}` });
            return;
        }
        res.status(200).json({message: "Task Delete Succefully"})

    } 


    const updateTask = async (req, res)=>{
        const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body,{
            runVlidator: true
        })


        if (!task) {
            res.status(404).json({message:`No task with ID:${req.params.id}` });
            return;
        }
        res.status(200).json({ message: "Task Updated Succefully" })
            

    };

    

    



module.exports = {
    getAllTasks,
    createTask,
    getEachTask,
    updateTask,
    deleteTask
}