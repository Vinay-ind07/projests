// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greet from './components/Greet';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Greet />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
