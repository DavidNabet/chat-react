import React from 'react'

function List() {
  return (
<div className="left_wrapper">
    <form method="post">
        <div className="search">
            <span className="search-icon"></span>
            <input type="text" placeholder="Search.." name="search" />
        </div>
        <span className="filter-icon" id="filterSearch"></span>
        
    </form>
    <ul className="messages">
        <li className="message">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Emilia Cortez</h5>
                    <a href="#" className="more">
                        <span className="more-icon"></span>
                    </a>    
                </div>
                <p>This is the subject of my message</p>
                <span>Just now</span>
            </div>
        </li>
        <li className="message">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Ashley Smith</h5>
                    <a href="#" className="more">
                        <span className="more-icon"></span>
                    </a>    
                </div>
                <p>This is the subject of my message</p>
                <span>3 hours ago</span>
            </div>
        </li>
        <li className="message">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Brian Hallen</h5>
                    <a href="#" className="more">
                        <span className="more-icon"></span>
                    </a>    
                </div>
                <p>This is the subject of my message</p>
                <span>Yesterday, 9:30</span>
            </div>
        </li>
        <li className="message selected">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Jessica Lee</h5>
                    <a href="#" className="more">
                        <span className="more-icon"></span>
                    </a>    
                </div>
                <p>Hey David, Attached are some product</p>
                <span>Yesterday, 9:30</span>
            </div>
        </li>
    </ul>
</div>
  )
}

export default List