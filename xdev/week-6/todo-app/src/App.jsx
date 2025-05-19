import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  return (
    <>
      <Todo id={1} />
    </>
  )
}

function Todo({ id }) {
    const [todo, setTodo] = useState([]);
    useEffect(()=>{
        async () =>{
            const get_res = await axios.get("https://dummyjson.com/todo/" + id)
            const res = await get_res.data;
            setTodo(res);
        }
    }, [])
    return <div>
        <h1>
            {todo.id}
        </h1>
        <h1>
            {todo.todo}
        </h1>

    </div>
};

export default App
