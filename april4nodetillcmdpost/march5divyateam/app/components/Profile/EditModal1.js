import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './editmodal.css'
// import addProfile from '../../images/add.png'
import CardProfile from '../../components/Profile/CardProfile';



const ImgUpload =({
  onChange,
   src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload " style={{height: "190px"}} >
        <img for="photo-upload" src={src} className="profile-format"/>
      </div>
   <input id="photo-upload" type="file" onChange={onChange}/> 
     </label>
  
  


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
       <Edit-profileModal/>
      <button color="danger" onClick={toggle} className="editbtn" style={{outline:"none",marginTop:"-100px",textAlign:"center"}}>Edit-Profile</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <div id="modaledit">
        <ModalBody>
          <div style={{display:"inline"}}>
       <h3 > Profile </h3>
       <h3 style={{marginTop:"-28px",float:"right",cursor:"pointer"}} onClick={toggle}> &#10062;</h3>
       </div>

        <div className="editmodalbg">

        <div className="cover-photo"></div>

            <div className="modalcirc">
                {/* <img src={require('../../images/bavarian.png')}  /> */}
                <CardProfile/>
                <div className="editplus">
       
                </div>
            </div>
          </div>
          {/* <div className="editname">
              <label>Name</label><br />
              <input type="text" style={{outline:"none"}}/>
          </div>
          <div className="editbio">
              
              <label>Add your bio</label><br/>
              <input type="text" style={{outline:"none"}}/>
          </div>
          <div className="editloc">
              <label>Location</label><br />
              <input type="text" style={{outline:"none"}}/>
          </div>
          <div className="editloc">
              <label>Date Of birth</label><br />
              <input type="date" style={{outline:"none"}}/>
          </div>
       
          <ModalFooter>
              <Button color="success" onClick={toggleNested}>Done</Button>{' '}
              <Button color="danger" onClick={toggleAll}>Cancel</Button>

            </ModalFooter> 
           */}
          <br></br>
          <br></br>
            {/* <Button color="success" className="birthbtn" onClick={toggleNested}>Edit birthdate</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Additional Details</ModalHeader>
            <ModalBody>
            <div className="editloc">
              <label>Date Of birth</label><br />
              <input type="date" style={{outline:"none"}}/>
          </div>
          
          <div className="editloc">
              <label>Date Of Month</label><br />
              <Label for="exampleSelect"><h5>Who sees this ?</h5>
         You can control who sees your brithday on Poster</Label>
         <br/>
       
         <input type="select" style={{outline:"none"}} placeholder="Public/Followers/People you follow/Only You"/>
              
              
          </div>
          <div className="editloc">
              <label>Year</label><br />
              <Label for="exampleSelect"><h5>Who sees this ?</h5>
         You can control who sees your brithday on Poster</Label>
         <br/>
       
              <input type="select" style={{outline:"none"}} placeholder="Public/Followers/People you follow/Only You"/>
              
              
          </div>
       
 
        </ModalBody>
          <ModalFooter>
              <Button color="success" onClick={toggleNested}>Done</Button>{' '}
              <Button color="danger" onClick={toggleAll}>Cancel</Button>
            </ModalFooter> 
            </Modal>  */}
       </ModalBody>
     
       </div>
      </Modal>
    
    </div>
  );
}

export default EditModal;