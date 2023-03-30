import React from 'react';
import './index.css';
const Tranfermoney = () => {
  return (
    <div>
        <form className="w3-container" action="/action_page.php">
  <div className="w3-section">
    <label>
      <b>Username</b>
    </label>
    <input
      className="w3-input w3-border w3-margin-bottom"
      type="text"
      placeholder="Enter Username"
      name="usrname"
      required=""
    />
    <label>
      <b>Amount
      </b>
    </label>
    <input
      className="w3-input w3-border"
      type="text"
      placeholder="Enter Amount"
      name="psw"
      required=""
    />
    <button
      className="w3-button w3-block w3-green w3-section w3-padding"
      type="submit"
    >
      Transfer Money
    </button>
    
  </div>
</form>

    </div>
  )
}

export default Tranfermoney