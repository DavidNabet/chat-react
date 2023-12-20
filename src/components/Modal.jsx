import {forwardRef} from "react"

const Modal = forwardRef(({children, onClose, ...props}, ref) => {
    return (
        <dialog ref={ref} {...props}>
            <button onClick={onClose} type="reset" slot="close">&times;</button>
            {children}
        </dialog>
    )
})

export default Modal;