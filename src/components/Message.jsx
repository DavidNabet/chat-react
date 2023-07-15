import React from 'react'

function Message() {
  return (
<div className="right_container">
    <div className="right_wrapper section">
        <div className="text-wrapper">
            <div className="text">
                <a className="avatar"></a>
                <h2 className="title">Time to get inspired</h2>
            </div>
            <div className="options">
                <span>May 4</span>
                <a className="favorite">
                    <i className="far fa-star"></i>
                </a>
                <a className="downlist">
                    <i className="far fa-ellipsis-v"></i>
                </a>
            </div>
        </div>
        <div className="row_padding">
            <ul className="tags-list">
                <li className="tag primary">Inspiration</li>
                <li className="tag secondary">Design</li>
            </ul>
            <div className="content">
                <p>Hey David,</p>
                <p>Attached are some product photos I believe will inspire you. I really dig the colors! They are <br />
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
    <div className="right_wrapper section">
        <div className="text-wrapper">
            <div className="text">
                <a className="avatar"></a>
                <h2 className="title">Time to get inspired</h2>
            </div>
            <div className="options">
                <span>May 4</span>
                <a className="favorite">
                    <i className="far fa-star"></i>
                </a>
                <a className="downlist">
                    <i className="far fa-ellipsis-v"></i>
                </a>
            </div>
        </div>
        <div className="row_padding">
            <ul className="tags-list">
                <li className="tag primary">Inspiration</li>
                <li className="tag secondary">Design</li>
            </ul>
            <div className="content">
                <p>Hey David,</p>
                <p>Attached are some product photos I believe will inspire you. I really dig the colors! They are <br />
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
</div>
  );
}

export default Message