import React from "react"
// SVG
import { MoreIcon, StarIcon } from "./icons";

function Message() {
    const starIconRef = React.useRef(null);
    const moreIconRef = React.useRef(null);
    return (
    <>
    <div className="right_wrapper section">
        <div className='message-info'>
            <div className='user-info'>
                <span className="avatar"></span>
                <div className='info-details'>
                    <p><strong>Jennifer</strong> to <strong>Me</strong></p>
                    <time>9:34 - May 4 2019</time>
                </div>
            </div>
            <div className='options'>
                <a className="favorite" href="#">
                   <StarIcon
                    ref={starIconRef}
                    fill="#F9C802"
                    className="star-icon"
                   />
                </a>
                <a className="downlist" href="#">
                   <MoreIcon 
                        ref={moreIconRef} 
                        fill="#979797" 
                        className="more-icon" 
                    />
                </a>
            </div>
        </div>
        <div className="message-area-inner">
            <h2>Time to get inspired</h2>
            <ul className="tags-list">
                <li className="tag primary">Inspiration</li>
                <li className="tag secondary">Design</li>
            </ul>
            <div className="content">
                <p>Hey David,</p>
                <p>Attached are some product photos I believe will inspire you. I really dig the colors! 
                <br /> They are
                from a project called <strong>Amor à Mama</strong> and were designed by <strong>Asa Onze Studio.</strong></p>
                <br />
                <p>Let me know what you think (though I'm pretty sure you will like them)</p>
            </div>
            <div className="images">
                <div className="images_msg first"></div>
                <div className="images_msg second"></div>
                <div className="images_msg third"></div>
                <div className="images_msg fourth"></div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Message