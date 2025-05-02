import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Women from './Navbar-tabs/Women'
import Men from './Navbar-tabs/Men'
import Beauty from './Navbar-tabs/Beauty'

const App = () =>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Women" element={<Women/>} />
            <Route path="/Men" element={<Men/>}/>
            <Route path="/Beauty" element={<Beauty/>}/>
            </Routes>
        </BrowserRouter>
    )
}
 export default App
