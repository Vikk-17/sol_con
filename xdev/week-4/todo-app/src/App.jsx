import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([{
        title: "Read Books",
        description: "Read the begining of Infinity",
    },{
        title: "Code for 10 hours",
        description: "I have to create a system",
    }]);
    
    function addTodo(){
        setTodos([...todos, {
            title: "new todo",
            description: "let me add new todo"
        }])
    }

    return (
        <div>
            <button onClick={addTodo}>Add random TODO</button>
             // <Todo title={todos[0].title} description={todos[0].description} />
            {todos.map(function(todo){
                return <Todo title={todo.title} description={todo.description} />
            })}
        </div>
    )

}

// components
function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
    </div>
}

export default App
