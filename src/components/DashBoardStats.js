import React from 'react';

const DashboardStats = () => (
  <div className="w3-row-padding w3-margin-top">
    <div className="w3-quarter">
      <div className="w3-container w3-red w3-padding-16">
        <div className="w3-left">
          <i className="fa fa-comment w3-xxxlarge"></i>
        </div>
        <div className="w3-right">
          <h3>1</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Account</h4>
      </div>
    </div>
    <div className="w3-quarter">
      <div className="w3-container w3-blue w3-padding-16">
        <div className="w3-left">
          <i className="fa fa-eye w3-xxxlarge"></i>
        </div>
        <div className="w3-right">
          <h3>2</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Account</h4>
      </div>
    </div>
    <div className="w3-quarter">
      <div className="w3-container w3-teal w3-padding-16">
        <div className="w3-left">
          <i className="fa fa-share-alt w3-xxxlarge"></i>
        </div>
        <div className="w3-right">
          <h3>3</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Account</h4>
      </div>
    </div>
    <div className="w3-quarter">
      <div className="w3-container w3-orange w3-text-white w3-padding-16">
        <div className="w3-left">
          <i className="fa fa-users w3-xxxlarge"></i>
        </div>
        <div className="w3-right">
          <h3>4</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Account</h4>
      </div>
    </div>
  </div>
);

export default DashboardStats;