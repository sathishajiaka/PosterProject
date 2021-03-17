import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input }
    from 'reactstrap';
import { Route, Redirect, withRouter } from 'react-router-dom';
// import ImageUploader from '../../../node_modules/react-images-upload';
import Comment from '../../components/Comment/Comment';
import './modal.css'

class Modals extends Component {

    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            file: '',
            value: '',
            imagePreviewUrl:'',
            
            file: [null]        };
        this.handleChange=this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
      
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)

        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }




    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }


    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
  
    handleChange = e => { this.setState({ value: e.target.value.substr(0, 10) }) };
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
            
        }));
    }


         

    render() {

 
        const closeBtn = <button className="cb" onClick={this.toggle}><p>&times;</p></button>;
        return (
            <div>
                <div>
                    <button type="button" className="cmt_btn" onClick={this.toggle}></button>
                    
                </div>
                

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle} close={closeBtn}  ></ModalHeader>

                    <span style={{ color: 'red' }}>{this.state.errMsg}</span>
                    
                    <div id="root">
                        <Comment/>
                    </div>
                </Modal>

            </div>



        );
    }
}

export default Modals;

