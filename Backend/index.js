const express = require('express')
const { Todo } = require('./db')
const cors = require("cors")
const app = express()
const zod = require('zod')

app.use(cors())
app.use(express.json())


function createTodo(obj) {
    const createTodo = zod.object({
        title:zod.string(),
        description:zod.string()
    })

    const response = createTodo.safeParse(obj)
    return response
}
function updateTodo(obj){
    const updateTodo = zod.object({
        id:zod.string()
    })

    const response = updateTodo.safeParse(obj)
    return response
}

app.post('/todo', async(req,res) => {
    const {success} = createTodo(req.body)

    if(!success){
       return res.status(411).json({
            msg:"invalid inputs"
        }) 
    }

    try{
        await Todo.create({
            title:req.body.title,
            description:req.body.description,
            completed:false
        })

        res.status(200).json({
            msg:"todo created"
        })
    }
    catch(error){
        res.status(500).json({
            msg:"internal server error"
        })
    }

 
})

app.get('/todos' , async (req,res)=>{

    try{
        const todo = await Todo.find({})

       return res.status(200).json({todo})
    }
    catch(error){
        res.status(500).json({
            msg:"internal server error"
        })
    }
})


app.put('/completed',async (req,res)=>{
    const {success} = updateTodo(req.body)

    if(!success){
       return res.status(411).json({
            msg:"invalid inputs"
        })
    }

    try{
        const todo = await Todo.updateOne({
            _id:req.body.id },
        {
            completed:true
        })
        res.status(200).json({
            msg:"Todo Completed"
        })
    }
    catch(error){
        res.status(500).json({
            msg:"internal server error"
        })
    }
   
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
})