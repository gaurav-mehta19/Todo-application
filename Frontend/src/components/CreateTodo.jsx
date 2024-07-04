import axios from "axios"
import { useState } from 'react'


export function CreateTodo(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    async function createTodo(){
       await axios.post('http://localhost:3000/todo',{
        title,description
       })
       setTitle('')
       setDescription('')
    }

    return <div>
        <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} style={{
            padding:10,margin:10
     }} type="text" placeholder="title" />
        <br /><br />
        <input value={description} onChange={(e)=>{
            setDescription(e.target.value)
        }} style={{
            padding:10,margin:10
     }} type="text" placeholder="description"/>
        <br /><br />
        <button style={{
            padding:10,margin:10
     }} onClick={createTodo}>Add a todo</button>
    </div>
}