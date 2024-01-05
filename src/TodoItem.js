import React from "react"


export default function TodoItem({text,setTodos,ind}){
    const [isSelected,setIsSelected] = React.useState(false)
    return (
        <div className="w-full flex justify-between">
            <p 
            onClick={()=>setIsSelected(prev=>!prev)}
            className={`p-2 hover:bg-slate-300 ${isSelected?"line-through":""} transition-all cursor-pointer`}>
                {text}</p>
            <button 
            onClick={()=>{
                setTodos(prev=>[...prev.filter((_,i)=>i!==ind)])
            const todos = JSON.parse(localStorage.getItem('todos'))
            localStorage.setItem('todos',JSON.stringify(todos.filter((_,i)=>i!==ind)))
            }
            } 
            className="bg-slate-300 rounded-md p-2 hover:bg-slate-900 hover:text-white transition-all">
                Delete</button>
        </div>
    )
}