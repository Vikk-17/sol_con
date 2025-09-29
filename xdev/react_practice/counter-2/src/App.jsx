import { useState } from "react";
import './App.css'


function App() {
    const [count, setCount] = useState(0); 
    const [step, setStep] = useState(1);
    const increase = () => setCount(count + step);
    const decrease = () => setCount(count - step);
    const reset = () => setCount(0);

    return (
        <div className="text-center mt-8">
            <h1 className="m-10 font-[800] text-5xl">Counter App</h1>
            <div>
                {/* Conditional Message */}
                {count === 0 && (
                    <div>
                    <p className="font-[500] text-4xl">{count}</p>
                    <p>Starting point</p>
                    </div>
                )}
                {count > 0 && (
                    <div>
                    <p className=" text-green-500 text-4xl font-[500] ">{count}</p>
                    <p>Positive territory</p>
                    </div>
                )}
                {count < 0 && (
                    <div>
                    <p className="text-red-500 text-4xl font-[500] ">{count}</p>
                    <p>Negative territory</p>
                    </div>
                )}

            </div>  

            {/* Operational Buttons */}
            <div>
                <Button operation={decrease} name={-step} />
                <Button operation={reset} name="Reset" />
                <Button operation={increase} name={+step} />
            </div>
            {/* Step size buttons */}
            <div className="mt-2">
                <h1>Step Size</h1>
                <StepButton step="1" /> 
                <StepButton step="2" /> 
                <StepButton step="5" /> 
                <StepButton step="10" /> 
            </div>
        </div>
    )
}


{/* Header */}
const Header = ({ theme, onThemeToggle }) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Counter App</h1>
            <button
                onClick={onThemeToggle}
                className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-400 text-white transition-colors"
            >
                {theme === "light"? "🌙": "☀️"}
                {theme == "light" ? "Dark": "Light"}
            </button>
        </div>
    );
}

{/* Count Display function */}
const CountDisplay = (count, theme) => {
    if(count > 0) return "text-green-500";
    if(count < 0) return "text-red-500";
    return theme === "dark" ? "text-white" : "text-gray-800";
};



const Button = ({ operation, name }) => {
    return (
        <button
            onClick={operation}
            className="p-2 m-1 bg-blue-500 text-white rounded hover:bg-blue-600" 
        >
            {name}
        </button>
    );
}

const StepButton = ({ step }) => {
    return (
        <button className="p-2 m-1 bg-gray-800 text-black rounded">
            {step}
        </button>
    )
}
export default App
