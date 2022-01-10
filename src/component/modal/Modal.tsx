import React from 'react'
import ReactDOM from 'react-dom'
import { ModalDimmer, ModalHeader } from 'semantic-ui-react'
import './modal.css';
import History from '../../History';

const Modal = (props: any) => {
  const portalDiv = document.querySelector('#modal');

  return (portalDiv ?
    ReactDOM.createPortal(
      <div onClick={props.closeModal} id="myModal" className="modal">

        <div onClick={e => e.stopPropagation()} className="modal-content">
          <div className="text-left px-2">
            <h1 className='text-xl font-medium underline'>
              {props.title}
            </h1>
          </div>
          <div className="content my-4">
            <p className='text-left text-lg'>
              {props.content}
            </p>
          </div>
          <div className="actions text-right mt-8">
            {props.actions}
          </div>
        </div>


      </div>

      , portalDiv)

    :

    null)

};

export default Modal;
