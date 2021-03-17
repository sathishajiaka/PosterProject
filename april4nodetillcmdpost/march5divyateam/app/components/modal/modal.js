import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input }
    from 'reactstrap';
import { Route, Redirect, withRouter } from 'react-router-dom';
// import ImageUploader from '../../../node_modules/react-images-upload';
const isEmpty = require('is-empty')

import './modal.css'

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
            finalimg: '',
            history:'/'


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


        localStorage.setItem("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU4NzM3N2VkNmM5NzkwM2EwODBiNzc4IiwiaWF0IjoxNTg2NjA5NjQyLCJleHAiOjE1ODY2MTk2NDJ9.ZPzMVngGurzLlf2TZLz0kn7g062TQYsCeu7RpHl9H6g")

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



        fetch(`http://localhost:5000/v1/createPost`, {
            method: 'post',
            headers: {
                'Authorization': this.state.token,

            },
            body: formData
        })
            .then(res => res.json())
            .then(response => { 
                // if(response.​message == "post your list"){
                    // let token = data.token
                    // localStorage.setItem("token",token)
                    // console.log("1");
                    this.props.history.push("/h");
                    this.props.history.push("/");
                    //    <Redirect to="/"/>
                  
                // }
             
                console.log("res", response) 
                console.log("res", response.message) 
             
        }).catch(err => { console.log("eer", err.message) })

    }

    render() {
  let r,showImage;
        if (this.state.finalimg != '') {
            showImage = <div id="image" >
                <span onClick={this.onFileremove} title="cancel">x</span>

                <img src={this.state.finalimg} style={{"maxHeight":"300px","maxWidth":"450px"}}/>

            </div>
        }

        const closeBtn = <button className="cb" onClick={this.toggle}><p>&times;</p></button>;
        return (
            <div>
                <div>
                    <button type="button" className="button"  onClick={this.toggle}>Post</button>
                </div>
                
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle} close={closeBtn}  ></ModalHeader>

                    <span style={{ color: 'red' }}>{this.state.errMsg}</span>
                    <Form onSubmit={this.mySubmitHandler}  >

                        <ModalBody >

                            <FormGroup>
                                <img src={require('./Vector.png')} style={{"marginLeft":"0px"}} className=""></img>

                                <textarea placeholder="Whats happening?" style={{"outline":"none","resize":"none","marginLeft":"55px","marginTop":"-55px"}} name="body" value={this.state.body} onChange={this.handleChange}></textarea>
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
                            <button type="submit" className="postsuccess"  onClick={this.toggle} >Post</button>{' '}
                        </ModalFooter>



                    </Form>

                </Modal>
            </div>



        );
    }
}

export default withRouter( Modals);

