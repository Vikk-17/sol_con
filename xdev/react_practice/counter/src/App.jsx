import React, { useState } from "react";
import "./App.css";

function App () {
    const name = "Dead Comrade";

    const [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        // if (count > 0) 
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    }
    return (
        <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-blue-600">Counter App</h1>
            <p>Testing by {name}</p>

            {/* Conditional Messages */}
            {count === 0 &&
                <p className="text-gray-600">You are at zero</p>
            }
            {count > 0 &&
                <p className="text-green-600">Positive Number</p>
            }
            {count < 0 &&
                <p className="text-red-600">Negative Number</p>
            }

            <p className="text-2xl mt-4">Button clicked: {count} times</p> 
            <Button operation={increase} label="Increase" />
            <Button operation={decrease} label="Decrease" />
            <Button operation={reset} label="Reset" />
        </div>
    );

}


// components
const Button = ({ operation, label }) => {
    return (
        <button 
            onClick= {operation}
            className = "px-4 py-2 m-0.5 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
            {label} 
        </button> 
    );
};


export default App;
