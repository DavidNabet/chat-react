import { useRef } from "react";

function useModal(){
    const ref = useRef(null);
    const onOpen = () => ref.current.showModal();

    const onClose = () => {
        ref.current.className = "close";
        setTimeout(() => {
            ref.current.close();
            ref.current.className = "";
        }, 300)
    }

    return {ref, onOpen, onClose}
}

export default useModal