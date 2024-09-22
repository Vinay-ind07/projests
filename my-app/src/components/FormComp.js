import React, { useState } from 'react';

function FormComp({ details, setdetails }) {
  const [amount, setamount] = useState(0);
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
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          onChange={(e) => setamount(Number(e.target.value))}
          value={amount}
        />
        <input
          type="text"
          name="msg"
          onChange={(e) => setmsg(e.target.value)}
          value={msg}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="need">need</option>
          <option value="want">want</option>
        </select>
        <button type="submit">enter</button>
      </form>
      
    </>
  );
}

export default FormComp;
