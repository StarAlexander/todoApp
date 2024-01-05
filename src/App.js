import React, { useRef } from "react";
import TodoItem from "./TodoItem";



export default  function App(){
    const [todos,setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')?? "[]"))
    const [isEdit,setIsEdit] = React.useState(false)
    const [newTodo, setNewTodo] = React.useState('')
    const ref = useRef()
    return (
        <div className="text-center max-w-md mx-auto">
            <div className="flex justify-center space-x-2">
            <h1 className="text-4xl max-w-md  font-mono  ">Todo app</h1>
            <button 
            onClick={()=>setIsEdit(prev=>!prev)} 
            className=" transition-all bg-slate-300 hover:bg-slate-900 hover:text-white rounded-md font-mono mt-1 text-center p-2">Add todo{!isEdit?'+':'-'}</button>
            </div>
            {isEdit && <div className="flex justify-center mt-3 space-x-1">
                <input 
                ref={ref} 
                value={newTodo} 
                onChange={(e)=>setNewTodo(e.target.value)} 
                onKeyDown={(e)=>{
                    if (e.code == 'Enter') {
                        setTodos(prev=>[...prev.concat(newTodo)])
                        localStorage.setItem('todos',JSON.stringify(todos.concat(newTodo)))
                        setNewTodo('')
                        console.log(todos)
                        
                    }
                }
                } 
                type="text" 
                className="outline-none border-b-black border-b" />
                <button onClick={()=> {
                setTodos(prev=>[...prev.concat(newTodo)])
                localStorage.setItem('todos',JSON.stringify(todos.concat(ref.current.value)))
                setNewTodo('')
                }
                } 
                className="transition-all bg-slate-300 hover:bg-slate-900 hover:text-white rounded-sm px-2">Add</button>
                </div>}
        <div className=" p-4 mt-8 w-full shadow-sm shadow-black h-auto overflow-x-hidden scrollbar-hide overflow-y-scroll space-y-4  rounded-md ">
            {todos.length? 
            todos.map((el,i)=><TodoItem text={el} key={i} ind={i} setTodos={setTodos}/>): 
            <p className="max-w-md mx-auto text-slate-900">There are no todos yet...</p>}
        </div>
        </div>
    )
}