import { useState } from "react";
import './App.css'

function App() {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [isAutoCount, setIsAutoCount] = useState(false); 
    const [history, setHistory] = useState([0]);

    // Event handler function 
    const increment = () => setCount(count + step); 
    const decrement = () => setCount(count - step); 
    const reset = () => setCount(0); 
    const handleStepChange = (newStep) => {
        setStep(newStep);
    }

    const themeClasses = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800";

    const buttonClasses = theme === "dark" ? "bg-gray-800 hover:bg-gray-500 text-white" : "bg-blue-500 hover:bg-blue-600 text-white";

    return (
        <div className={`min-h-screen p-8 transition-colors duration-300 ${themeClasses}`}>
            <div className="max-w-2xl mx-auto">
                <Header theme={theme} onThemeToggle={() => {
                setTheme(theme === 'light' ? "dark" : "light")
                }}/> 
                
                {/* Main counter display */}
                <div className="text-center mb-8">
                    <CountDisplay count={count} theme={theme} /> 
                </div>
                
                {/* Control buttons */}
                <div className="flex justify-center gap-4 mb-8">
                   <CounterButton 
                        onClick={decrement}
                        disabled={isAutoCount}
                        className={buttonClasses}
                    > - {step} </CounterButton>
                </div>
            </div>
        </div>
    )
}

const Header = ({ theme, onThemeToggle }) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
                Counter App
            </h1>
            <button
                onClick={onThemeToggle}
                className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-400 text-white"
            >
                {theme==="light" ? '🌙 Dark' : '☀️ Light'}
            </button>
        </div>
    )
}


const CountDisplay = ({ count, theme }) => {
    const getCountColor = () => {
        if(count > 0) return "text-green-500";
        if(count < 0) return 'text-red-500';
        return theme === "dark" ? "text-white" : "text-gray-800";
    };

    return (
        <div className="mb-4">
           <div className={`text-8xl font-bold ${getCountColor()} transition-colors duration-300`}>
                {count}
           </div>
            <div>
                {count === 0 ? "Starting point" : count > 0 ? "Positive territory" : "Negative territory"}
            </div>
        </div>
    );
}


const CounterButton = ({ onClick, disabled, className, children }) => {
    return (
        <button 
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'} ${className}`}
        >
            {children}
        </button>
    );
}

export default App
