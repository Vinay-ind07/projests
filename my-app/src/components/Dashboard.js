// src/components/Dashboard.js

import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FormComp from './FormComp';
import ExpenseList from './ExpenseList';
// import styles from './src/App.css'


export default function Dashboard() {
    const location = useLocation();
    const name = location.state?.name || "Guest"; // Default to "Guest"
    const myStyle = {
        display: 'flex',
        justifyContent: 'space-between'

    }
    const[budget,setbudget]=useState('green')
    const budgetStyle={
    height:'20px',
    width:'20px',
    backgroundColor:budget,
    borderRadius:'50%'
    }
    const [details, setdetails] = useState([])
    const [show, setShow] = useState(false); // Use a boolean state
    const [totalAmount, setTotalAmount] = useState();
    const [time ,settime]=useState("")
    const handleStyle = () => {
        setShow((prevShow) => !prevShow); // Toggle the boolean state
    };
    useEffect(() => {
        const sum = details.reduce((acc, detail) => acc + Number(detail.amount), 0);
        setTotalAmount(sum);
        if(sum>100){
            setbudget("red")
            // alert('budget exceeded')
        }
      }, [details]); 

      const [mode,setmode]=useState(false)
      const handleMode=()=>{
        setmode(prevmode=>!prevmode)
      }
      

    return (
        <>
         <div style={{color:mode?"black":"white",backgroundColor:mode?"white":"black",height:'100vh',width:'100vw'}} 
         className="center">
            <div style={myStyle} className='flex'>
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome, {name}!</p>
                </div>
                <FormComp details={details} setdetails={setdetails}  settime={settime}/>
                <div className='inline-block'>
                <div style={budgetStyle}></div>
                <h3>MONEY SPENT {totalAmount} rs </h3></div>
                
            </div>
                    <button onClick={handleMode} className="btn btn-warning">{mode?"dark":"light"}</button>
            <div>
                <button onClick={handleStyle}>{show ? 'Hide' : 'Show'}</button>
                <div style={{ display: show ? 'block' : 'none' }}>
                    {details.map((detail, index) => (
                        <ExpenseList key={index} detail={detail} time={time}/> 
                    ))}
                </div>
            </div>
            
        

            </div>
        </>
    );
}
