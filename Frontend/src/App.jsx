import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
import axios from "axios"




function App() {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/todos')
    .then(response =>{
      setTodos(response.data.todo)
    })
  },[todos])
 

  return (
    <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos} setTodos={setTodos}></Todos>
    </>
  )
}

export default App
