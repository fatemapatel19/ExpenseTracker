import React from 'react';
import './index.css';
const Analytics = () => {
  return (
    <div>
    <h5>General Stats</h5>
    <p>New Visitors</p>
    <div className="w3-grey">
      <div
        className="w3-container w3-center w3-padding w3-green"
        style={{ width: "75%" }}
      >
        +25%
      </div>
    </div>
    <p>New Users</p>
    <div className="w3-grey">
      <div
        className="w3-container w3-center w3-padding w3-orange"
        style={{ width: "50%" }}
      >
        50%
      </div>
    </div>
    <p>Bounce Rate</p>
    <div className="w3-grey">
      <div
        className="w3-container w3-center w3-padding w3-red"
        style={{ width: "75%" }}
      >
        75%
      </div>
    </div>
    <hr />
  </div>
  )
}

export default Analytics;