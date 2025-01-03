import { useRef, useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ open, children }, ref) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
