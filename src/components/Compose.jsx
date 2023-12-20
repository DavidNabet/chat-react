import React from 'react'
import useModal from "@/hooks/useModal";
import Modal from "./Modal"

function Compose() {
    const  {ref, onOpen, onClose} = useModal();
  return ( 
    <div style={{position: "absolute", bottom: 0, right: 0, left: 0}}>
        <button id="openModal" onClick={onOpen}>Open Modal</button>
        <Modal ref={ref} onClose={onClose} id="box-compose" style={{width: "100%"}}>
            <form className="box-compose_form" action="" method="POST">
                <div className="box-compose_form_header">
                    <a className="avatar"></a>
                    <textarea name="message-to-send" id="message-to-send" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <div className="box-compose_form_footer">
                    <span>
                        <i className="icon picture box-compose_form_footer_icon"></i>
                        <i className="icon attachment box-compose_form_footer_icon"></i>
                        <i className="icon emoji box-compose_form_footer_icon"></i>
                    </span>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Modal>
    </div>

  )
}

export default Compose