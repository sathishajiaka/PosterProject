import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input }
    from 'reactstrap';
import { Route, Redirect, withRouter } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import { rough, poster } from '../../services/s'
import './modal.css'
import axios from 'axios';
const isEmpty = require('is-empty')


class Modals extends Component {



    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            lan: 0.00,
            lat: 0.00,
            s: '',
            body: '',
            token: '',
            img: '',
            finalimg: ''


        };
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);

        this.onFileChange = this.onFileChange.bind(this);

    }



    onFileChange = (e)  =>{
        this.setState({
            finalimg: URL.createObjectURL(e.target.files[0]),
            img: e.target.files[0]
        })
    }

    onFileremove = (e) => {

        this.setState({
            finalimg: '',
            img: ''
        })
    }


    handleChange = e => {
        this.setState({
            value: e.target.value.substr(0, 10),
            body: e.target.value
        })
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }



    componentWillMount() {


        localStorage.setItem("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU2MDgwYzFjMWU3YjcxOThhMmEyNzUyIiwiaWF0IjoxNTgzNDcxNjk4LCJleHAiOjE1ODM0ODE2OTh9.GfKwWX5sALA31ZXHk7kiH4_0c-BeewTrZwq7r3OjaBI")

        var tokenget = localStorage.getItem('token')

        if (!isEmpty(tokenget)) {

            this.setState(
                {
                    token: tokenget
                }
            )

        }
    }



    rdk = () => {



        if ('geolocation' in navigator) {
            console.log('geolocation available');
            navigator.geolocation.getCurrentPosition(async position => {

                const lats = position.coords.latitude;
                const lang = position.coords.longitude;
                console.log("hg", lats)
                this.setState({
                    lat: lats,
                    lan: lang
                }, () => {
                    console.log("latit", this.state.lat);
                    console.log("lang", this.state.lan);

                })




            }


            )



        }


    }

    mySubmitHandler = (event) => {
        event.preventDefault();


        this.rdk();


        alert("thank you");



        var formData = new FormData();

        formData.append('imgCollection', this.state.img)
        formData.append('body', this.state.body)
        formData.append('l', this.state.lat)
        formData.append('ll', this.state.lan)



        fetch(`v1/createPost`, {
            method: 'post',
            headers: {
                'Authorization': this.state.token,

            },
            body: formData
        })
            .then(res => res.json())
            .then(response => { console.log("res", response) })
            .catch(err => { console.log("eer", err.message) })

    }





    render() {
        let r,showImage;
        if (this.state.finalimg != '') {
            showImage = <div id="image" >
                <span onClick={this.onFileremove} title="cancel">x</span>

                <img src={this.state.finalimg} />

            </div>
        }

        const closeBtn = <button className="cb" onClick={this.toggle}><p>&times;</p></button>;
        return (
            <div>
                <div>
                    <Button type="button" className="button" onClick={this.toggle}>Post</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle} close={closeBtn}  ></ModalHeader>

                    <span style={{ color: 'red' }}>{this.state.errMsg}</span>
                    <Form onSubmit={this.mySubmitHandler}  >

                        <ModalBody >

                            <FormGroup>
                                <img src={require('./Vector.png')} className="style"></img>

                                <textarea placeholder="Whats happening?" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                                <p>{this.state.apiResponse}</p>
                            </FormGroup>






                            {showImage}


                        </ModalBody>
                        <ModalFooter >

                            <div className="ico">

                                <label htmlFor="i">
                                    <img src={require('./s.png')} className="first" />
                                </label>
                                <input type="file" name="imgCollection" onChange={this.onFileChange} className="dontshow" id="i" />
                                <img src={require('./uuu.png')} className="first"  ></img>
                                <img src={require('./charticon.png')} className="first" ></img>
                                <img src={require('./kkk.png')} className="four" ></img>


                            </div>



                            <img src={require('./Addpost.svg')}  ></img>
                            <button type="submit" className="postsuccess" onClick={this.toggle} >Post</button>{' '}
                        </ModalFooter>



                    </Form>

                </Modal>

            </div>



        );
    }
}

export default Modals;










