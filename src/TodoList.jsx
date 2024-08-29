import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(),isdone: false}]);
    let [newTodo, setnewTodo] = useState("")

    let addNewTask = () =>{
        setTodos ((prevTodo)=>{
         return   [...prevTodo,{task: newTodo, id: uuidv4(),isdone:false}];
        })
       
    };

    let deletTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodos)=> prevTodos.id != id));
    };

    let markAllDone = () =>{
        setTodos((prevTodos) => prevTodos.map((prevTodos)=>{
            return {...prevTodos,isdone:true }
            }));
    };

    let markAsDone = (id) =>{
        setTodos((prevTodos) => prevTodos.map((prevTodos)=>{
            if(prevTodos.id == id)
            return {...prevTodos, isdone:true + prevTodos
                .task.slice(1)}
                else{
                    return prevTodos;
                }
                }));
    }

    let updateTodoValue = (event) =>{
     setnewTodo(event.target.value);
    };
    return(
        <div>
              <h1>Todo List</h1>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br> 
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr> 
            <h3>Task Of Todo</h3>
            <ul>
               {todos.map((todo)=>(
              <li key={todo.id}>
                 <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>markAsDone((todo.id))}
            />
              <span style={todo.isdone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>  
             &nbsp;&nbsp;&nbsp;
              <button onClick={() => deletTodo(todo.id)}>delete</button>
                </li>
                ))}
            </ul>
        <br></br>
        <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    );
}