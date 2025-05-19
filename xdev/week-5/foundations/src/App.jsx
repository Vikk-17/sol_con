import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
                setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <h1>Couter: {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </>
    )
}

export default App
