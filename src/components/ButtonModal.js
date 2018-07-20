import React from 'react';
import Modal from 'react-modal';

const ButtonModal = (props) => ( //implicit return statement
  <Modal
    isOpen={!!props.idToRemove} //required
    closeTimeoutMS={200}
    contentLabel = {"Confirm Delete?"} //required
    className="modal"
    onRequestClose ={props.onCancel}
  >
    <h3 className="modal__title">Confirm Delete?</h3>
    <button className="button"onClick={props.removeExpense}>Yes</button>
    <button className="button"onClick={props.onCancel}>Cancel</button>
  </Modal>
);

export default ButtonModal;