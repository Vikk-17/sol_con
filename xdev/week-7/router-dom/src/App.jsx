// import React, { Suspense, useState } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
//
// const Dashboard = React.lazy(()=> import("./components/Dashboard"))
// const Landing = React.lazy(()=> import("./components/Landing"))
//
// function App() {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Appbar />
//                 <Routes>
//                     <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//                     <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//   )
// }
//
// function Appbar() {
//     const navigate = useNavigate();
//     return <div>
//         <div>
//             <button onClick = {()=>{
//                 navigate("/");
//             }}>Landing Page</button>
//         </div>
//         <div>
//             <button onClick = {()=>{
//                 navigate("/dashboard")
//             }}>Dashboard Page</button>
//         </div>
//     </div>
// }
//
import { CountContext } from "./context.jsx";
import { countAtom } from "./store/atoms/count.jsx"
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';

function App() {


    // wrap anyone that wants to use the teleported value inside a provider
    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    )
}

function Count() {
    return <div>
        <CountRednerer />
        <Button />
    </div>
}

function CountRednerer() {
    const count = useRecoilValue(countAtom);
    return <div>
        <b>
            {count}
        </b>
    </div>
}


function Button(){
    const [count, setCount] = useRecoilState(countAtom);
    return <div>
        <button onClick = {()=>{
            setCount(count+1);
        }}>Increase</button>
        <button onClick = {()=>{
            setCount(count-1);
        }}>Decrease</button>
    </div>
}


export default App
