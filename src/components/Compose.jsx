import React from 'react'

function Compose() {
  return (
    <div style="position: sticky; bottom: 0; right: 0; left: 0;">
    <div className="box-compose" style="width: 100%;">
        <form className="box-compose_form" action="" method="POST">
            <div className="box-compose_form_header">
                <a className="avatar"></a>
                <textarea name="message-to-send" id="message-to-send" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <div className="box-compose_form_footer">
                <div>
                    <i className="icon picture box-compose_form_footer_icon"></i>
                    <i className="icon attachment box-compose_form_footer_icon"></i>
                    <i className="icon emoji box-compose_form_footer_icon"></i>
                </div>
                <button type="submit">Send</button>
            </div>
        </form>
    </div>
</div>

  )
}

export default Compose