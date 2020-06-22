import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}

export default App
