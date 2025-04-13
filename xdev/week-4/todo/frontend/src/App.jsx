import { useState } from 'react'
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://127.0.0.1:3000/todos")
    .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
    })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
