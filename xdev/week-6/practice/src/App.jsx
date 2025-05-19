import { useState, useEffect } from 'react';


// function App() {
//     const [todos, setTodos] = useState([
//         {
//             id: 1,
//             text: "Learn React",
//         },
//         {
//             id: 2,
//             text: "Build a todo app",
//         },
//         {
//             id: 3,
//             text: "Deploy to production",
//         }
//     ])
//
//     function addTodo(){
//         // simulate adding new todo
//         const newTodo = {
//             id: todos.length + 1,
//             text: "New todo added",
//         }
//         setTodos([...todos, newTodo]);
//     }
//
//     return (
//         <div>
//             <button onClick={addTodo}>Add Todo</button>
//             <TodoList todos={todos} />
//         </div>
//   )
// }

// function TodoList({ todos }){
//     return <ul> 
//         {todos.map(todo => {
//             // Each todo item needs a unique key
//             return <li key={todo.id}>{todo.text}</li>
//         })}
//     </ul>
// }

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // simulating a data fetching operation
                const response = await fetch("");
                const result = await response.json();
                setData(result);
            } catch(error){
                console.log("Error fetching data: ", error);
            }
        };
        
        fetchData();
        // Effect cleanup (will run before unmounting)
        return () => {
            console.log("Component will unmount. Cleanup here.");
        };
    }, []); // Empty dependecy arrays means the effect runs once after mount
    
    return (
        <div>
            {
                data ? (
                    <p>Data: {data}</p>
                ) : (
                    <p>Loading data...</p>
                ) 
            }
        </div>
    );
};

export default App
