import React, { useState } from 'react';

function FormComp({ details, setdetails, settime }) {
  const [amount, setamount] = useState();
  const [msg, setmsg] = useState('');
  const [category, setCategory] = useState('need'); // State for category

  const handleSubmit = (e) => {
    e.preventDefault();

    setdetails((prevState) => [
      ...prevState,
      { amount: amount, msg: msg, category: category },
    ],()=>{console.log(details)});
    
    // Reset the input fields
    setamount(0);
    setmsg('');
    setCategory('need'); // Reset category
    const d = new Date();
     let time = `${d.getHours()% 12 || 12}:${d.getMinutes()}`
     settime(time)
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="d-flex justify-content-center">
        <input
          type="number"
          name="amount"
          onChange={(e) => setamount(Number(e.target.value))}
          value={amount}
          placeholder='amount'
          className='m-y 3'
        />
        <input
          type="text"
          name="msg"
          onChange={(e) => setmsg(e.target.value)}
          value={msg}
          placeholder='message'
          className='my 3'
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}
          className="form-select   " >
          <option value="need" >need</option>
          <option value="want" >want</option>
        </select>
        </div>
        <button type="submit" className="btn btn-warning">enter</button>
      </form>
      
    </>
  );
}

export default FormComp;
