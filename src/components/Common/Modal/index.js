import React from 'react';
import ReactDOM from 'react-dom';
import { useHeaderContext } from '../../../providers/Header';
import { StyledModal } from './styled'

function Modal({ children }) {

  const { setOpenModal} = useHeaderContext()

  const handleCloseSearch = () => {
      setOpenModal(false)
  };  

  return ReactDOM.createPortal(

    <StyledModal className="modal__container">
        <button className="modal__close" onClick={handleCloseSearch}>x</button>
        {children}
    </StyledModal>,
    document.getElementById('modal')
  );
}

export { Modal };