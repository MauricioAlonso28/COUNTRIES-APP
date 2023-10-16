import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail'
import Btn from './components/Home/Btn'

function App() {
    const location = useLocation()

    return (
        <>
            {
                location?.pathname !== '/' ? <Btn/> : <Landing/> 
            }
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </>
    )
}

export default App
