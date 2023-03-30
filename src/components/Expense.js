import React from 'react';
import './index.css';

const Expense = () => {
  return (
   
  <div className='forum'>

    <form className='income-expense'>
            <h1>Add Expense Information</h1>
            <input type="name" placeholder="Name" />
            <input type="number" placeholder="Income" />
        </form>
        <button type="submit" className="submit_btn" >Submit</button>
       
  </div> 


  );
}

export default Expense;