import React from 'react';
import avt from "./avatar.png"
import Income from "./income.png"
import expense from "./expense.png"
import analytics from "./analytics.png"
import view from "./view.png"
import transactions from "./transaction.png"
import history from "./history.png"
import log from "./logout.png"


function Slidebar() {
  return (
    <nav
      className="w3-sLidebar w3-collapse w3-white w3-animate-left"
      style={{ zIndex: 3, width: '300px' }}
      id="mySlidebar"
    >
      <br />
      <div className="w3-container w3-row">
        <div className="w3-col s4">
          <img
            src={avt}
            className="w3-circle w3-margin-right"
            style={{ width: '90px' }}

          />
          <span>
            Welcome, <strong>User</strong>
          </span>

        </div>
      </div>
      <hr />
      <div className="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div className="w3-bar-block">
        <a
          href="#"
          className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"

          title="close menu">

        </a>

        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={Income} height="30" /> Add Income
        </a>

        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={expense} height="30" /> Add Expense
        </a>



        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={view} height="30" /> View Expense
        </a>


        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={analytics} height="30" /> View Analytics
        </a>

        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={transactions} height="25" /> Money Transfer
        </a>


        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={history} height="25" /> Transaction History
        </a>


        <a href="#" className="w3-bar-item w3-button w3-padding">
          <img src={log} height="27" /> Logout
        </a>


      </div>
    </nav>
  )
};

export default Slidebar;

