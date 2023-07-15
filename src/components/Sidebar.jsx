import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="flex-icon">
        <div className="icon-wrapper">
            <a href="#" className="dashboard"></a>
        </div>
        <div className="icon-wrapper">
            <a href="#" className="notification"></a>
        </div>
        <div className="icon-wrapper">
            <a href="#" className="mail"></a>
        </div>
        <div className="icon-wrapper">
            <a href="#" className="team"></a>
        </div>
        <div className="icon-wrapper">
            <a href="#" className="chart"></a>
        </div>
    </div>
    <div className="icon-wrapper">
        <a href="#" className="settings"></a>
    </div>
</div>
  )
}

export default Sidebar