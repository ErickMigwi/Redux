import './App.css';
import store from './Store';
import React, {useEffect, useState} from 'react';

 
 function App(){
  let [task, setTask] = useState("")
  let [todo, setTodo] = useState(store.getState())
  let handleInput = e=> setTask(e.target.value)
  let handleAddTask =()=>{
    store.dispatch({
      type:'AddTodo',
      payload: {
        task: task
      }
      
    })
   
  console.log(todo.task);
    console.log(task);
  }
  
  let handleDelete =(id)=>{
    store.dispatch({
      type: 'delTask',
      payload: {
        id:id
      }
    })
  }
  let handleCheck = (id, )=>{
    store.dispatch({
      type:'check',
      payload:{
        id:id,
     
      }
    })
    console.log(todo);
  }
useEffect(()=>{
  store.subscribe(()=>{
    setTodo(store.getState())
  })
}, [todo])
   return (
   
    <div id='main'>
     <h1> TODO APP</h1>
     <div id='header'>
      <input onChange={handleInput}/>
      <button onClick={handleAddTask}>AddTask</button>
      </div>
      {todo && todo.length >0 ?(
        todo.map(item=>
          <div id='display'>
          <div id='data'>
            
          <p>Task: {item.task}</p>
         
          <p>Completed: {item.completed ? "Yes": "No"}</p>
         </div>
         <div id='delete'>
          <button onClick={()=>handleDelete(item.id)}>DeleteTask</button>
          <label>Check Complete:
            <input onChange={()=>handleCheck(item.id)} type='checkbox'/>
          </label>
          </div>
          </div>
        )
      ):(
        <p id='italic'>Please add tasks</p>
      )}
    </div>
   )
 }
 export default App