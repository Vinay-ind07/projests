// src/components/Dashboard.js

import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FormComp from './FormComp';
import ExpenseList from './ExpenseList';


export default function Dashboard() {
    const location = useLocation();
    const name = location.state?.name || "Guest"; // Default to "Guest"
    const myStyle = {
        display: 'flex',
        justifyContent: 'space-between'

    }
    const [details, setdetails] = useState([])
    const [show, setShow] = useState(false); // Use a boolean state
    const [totalAmount, setTotalAmount] = useState(0);

    const handleStyle = () => {
        setShow((prevShow) => !prevShow); // Toggle the boolean state
    };
    useEffect(() => {
        const sum = details.reduce((acc, detail) => acc + Number(detail.amount), 0);
        setTotalAmount(sum);
      }, [details]);
    return (
        <>

            <div style={myStyle}>
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome, {name}!</p>
                </div>
                <FormComp details={details} setdetails={setdetails} />
                <h3>MONEY SPENT {totalAmount} rs</h3>
            </div>
            <div>
                <button onClick={handleStyle}>{show ? 'Hide' : 'Show'}</button>
                <div style={{ display: show ? 'block' : 'none' }}>
                    {details.map((detail, index) => (
                        <ExpenseList key={index} detail={detail} />
                    ))}
                </div>
            </div>



        </>
    );
}
