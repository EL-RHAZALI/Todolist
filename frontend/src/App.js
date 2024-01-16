import { useEffect, useState } from "react";

function App() {
  const [todos , setTodos] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/todo/get")
    .then(res=>res.json())
    .then(data=>setTodos(data))
    .catch((Err)=>console.error("Erreur" , Err))
  } , [])


 const TodoIsCompleted = async(id) => {
  const data = await fetch("http://localhost:3000/todo/completed/" + id)
  .then(res => res.json())
  setTodos(todos => todos.map(todo => {
    if(todo._id === data._id) {
      todo.completed = data.completed
    }
    return todo;
  }))
 }

 const TodoIsDeleted = async (id) => {
  const data = await fetch("http://localhost:3000/todo/delete/" + id , {method:"DELETE"})
  .then(res => res.json())
  setTodos(todos => todos.filter(todo => todo._id !== data.result._id))
 }
 
  return (
    <div className="App">
      <div className="h1">
        <h1>TODOLIST</h1>
      </div>
      <h2>Your tasks</h2>
      <div>
        {todos.map(todo=>(
          <div className="fullTodo">
            <div className={"todo " + (todo.completed ? "is-completed" : "" )}
            onClick={() => TodoIsCompleted(todo._id)}>
              <div className="button-valide"></div>
              <div className="text">{todo.text}</div>
              <div className="button-supprimer" onClick={() => TodoIsDeleted(todo._id)}>X</div>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
