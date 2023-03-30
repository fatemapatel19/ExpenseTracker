import React from 'react';
const SidebarOverlay = () => (
  <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    onClick={w3_close}
    style={{ cursor: 'pointer' }}
    title="close side menu"
    id="myOverlay"
  />
);

function w3_close() {
  document.getElementById('mySidebar').style.display = 'none';
  document.getElementById('myOverlay').style.display = 'none';
}
export default SidebarOverlay;
