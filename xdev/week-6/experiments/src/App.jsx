import { useState } from "react";


function App() {

    return(
        <div>
            <HeaderWithButton />
            <Header title="Chakraborty" />
        </div>
    )
}

function HeaderWithButton(){
    const [title, setTitle] = useState("My name is Souvik");
    
    function changeTitle(){
        setTitle("My name is" + Math.random());
    }

    return <div>
        <button onClick={changeTitle}>Change the title</button>
        <Header title={title} />
    </div>
}

function Header({title}) {
    return <div>
        {title}
    </div>
}

export default App
