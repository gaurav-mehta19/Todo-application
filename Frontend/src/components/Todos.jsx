import axios from "axios"


export function Todos({todos,setTodos}){

    async function markcompleted(todoId){
        await axios.put('http://localhost:3000/completed',{
            id:todoId
        })

        const updateTodos = todos.map((todo)=>{
            if(todo._id == todoId){
                return {...todo,completed:true}
            }
            return todo
        })
        setTodos(updateTodos)
    }

    return <div>
        {todos.map(function(todo){
            return <div key={todo._id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <button onClick={()=> markcompleted(todo._id)}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}