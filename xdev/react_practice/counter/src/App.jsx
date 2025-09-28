import React, { useState } from "react";
import "./App.css";

function App () {
    const name = "Dead Comrade";

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(""); 
    const [items, setItems] = useState([]);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    const addItem = () => {
        if(message.trim() !== "") {
            setItems([...items, message]);
            setMessage("");
        }
    };

    const clearItems = () => {
        setItems([]);
    };

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
            <div className="mt-4 flex justify-center space-x-2">
                <Button operation={increase} label="Increase" />
                <Button operation={decrease} label="Decrease" />
                <Button operation={reset} label="Reset" />
            </div>

            <div>
                <label>Type a message: </label>
                <input 
                    type="text"
                    value={message}
                    onChange= {(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addItem()}
                    placholder="Enter your message here"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                {message && (
                    <p className="mt-2 p-2 bg-blue-100 rounded">You typed: "{message}"</p>
                )}
            </div>

            {/* Display the list */}
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
