import React, { useState } from 'react';
import './App.css';

// import Counter from './Counter'

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState("")
// const [state,setState]= useState(false)
const Delete =(id)=>{
  setTodos(toDos.filter(obj2=>{
     if(obj2.id  === id){
        obj2.delete = true 
    }
    return obj2
  }))
}

const edit=(id)=>{
  setTodos(toDos.filter(obj2=>{
    if(obj2.id  === id){
       obj2.edit = true 
   }
   return obj2
 }))
}
const submit=(id)=>{
  setTodos(toDos.filter(obj2=>{
    if(obj2.id  === id){
       obj2.text =  toDo
   }
   return obj2
 }))
}
  return (    

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>s
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => setTodos([...toDos,{id:Date.now(),text:toDo,status:false,delete:false,edit:false}]) }></i>
      </div>
      <div className="todos">
        {toDos.map((name) => {
          return (
             
            <div className="todo">
              <div className="left">
             
                <input 
                onChange={(e)=>{
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id === name.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }}
                type="checkbox" value={name.status}name="" id="" />
               { name.delete ? <p><del>{name.text}</del></p>  :    <p >{name.text}</p>}
              </div>
              <div className="right">
                <i className='fas fa-edit' onClick={()=> edit(name.id)}></i>
                <i className="fas fa-times" onClick={()=>Delete(name.id)}></i>
            
              </div>
            </div>
                )
        }
        )}

        {/* {toDos.map((obj)=>{
          if(obj.status){
          return(
            <h1>{obj.text}</h1>
          )
        }
        })} */}
      </div>
    </div>
  )
  }
export default App;  

  // <div className="app">
  //     <h1 onClick={()=>setState(!state)}>Hello world</h1>
  //     {state ? <Counter/> : null }
  //   </div>
  //     );
  //   }