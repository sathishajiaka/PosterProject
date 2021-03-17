import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './editmodal.css'
const EditModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
    <div>
      <button color="danger" onClick={toggle} className="editbtn" style={{outline:"none"}}>Edit Profile</button>
      <Modal isOpen={modal} toggle={toggle} className={className} id="modalll">
      <div id="modaledit">
        <ModalBody>
          <h3>Edit Profile</h3>
          <div className="editmodalbg">
            <div className="modalcirc">
                <img src={require('../../image/user.svg')} />
            </div>
          </div>
          <div className="editname">
              <label>Name</label><br />
              <input type="text" style={{outline:"none"}}/>
          </div>
          
          <div className="editbio">
              <label>Bio</label><br />
              <label>Add your bio</label><br/>
              <input type="text" style={{outline:"none"}}/>
          </div>
          <div className="editloc">
              <label>Location</label><br />
              <input type="text" style={{outline:"none"}}/>
          </div>
         
        </ModalBody>
        </div>
      </Modal>
    </div>
  );
}

export default EditModal;