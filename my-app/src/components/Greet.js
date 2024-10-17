// src/components/Greet.js

import React, { useState ,useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Greet() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleStart() {
        navigate("/dashboard", { state: { name } });
    }
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input when the component mounts
        inputRef.current.focus();
    }, []);
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>WELCOME TO EXPENSE TRACKER</h1>
            <p>Keep track of all your money</p>
            <input 
                type='text' 
                placeholder='Enter your name' 
                onChange={handleChange} 
                ref={inputRef}
            />
            <br />
            <button onClick={handleStart}>GET STARTED</button>
        </div>
    );
}
