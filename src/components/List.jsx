import React from 'react'

function List() {
  return (
<div className="left_wrapper">
    <form method="post">
        <div className="search">
            <i className="far fa-search"></i>
            <input type="text" placeholder="Search.." name="search" />
        </div>
        <div id="filterSearch">
            <i className="icon filter"></i>
        </div>
    </form>
    <ul className="messages">
        <li className="message">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Emilia Cortez</h5>
                    <a className="more">
                        <i className="fas fa-ellipsis-h"></i>
                    </a>    
                </div>
                <p>This is the subject of my message...</p>
                <span>Just now</span>
            </div>
        </li>
        <li className="message">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Ashley Smith</h5>
                    <a className="more">
                        <i className="fas fa-ellipsis-h"></i>
                    </a>    
                </div>
                <p>This is the subject of my message...</p>
                <span>3 hours ago</span>
            </div>
        </li>
        <li className="message">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Brian Hallen</h5>
                    <a className="more">
                        <i className="fas fa-ellipsis-h"></i>
                    </a>    
                </div>
                <p>This is the subject of my message...</p>
                <span>Yesterday, 9:30</span>
            </div>
        </li>
        <li className="message selected">  
            <a className="avatar"></a>
            <div className="content">
                <div className="content_actions">
                    <h5>Jessica Lee</h5>
                    <a className="more">
                        <i className="fas fa-ellipsis-h"></i>
                    </a>    
                </div>
                <p>Hey David, Attached are some product...</p>
                <span>Yesterday, 9:30</span>
            </div>
        </li>
    </ul>
    
</div>
  )
}

export default List