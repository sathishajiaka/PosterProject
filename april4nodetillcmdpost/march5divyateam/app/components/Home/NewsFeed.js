import React, { Component } from 'react';
import './newsfeed.css'
import Post from '../Newsfeed/Post';

import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('jpg', 'png');
    return fileSelector;
  }

class NewsFeed extends Component {
    componentDidMount(){
        this.fileSelector = buildFileSelector();
      }
      
      handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
      }
    render() {
        return (
            <div>
              
               <Card style={{width:'120.6%',height:'130px',marginTop:'-70px'}}>
                       <CardText ><img src = {require('../../image/user.png')} style={{height:"25px",width:"25px",marginLeft:"24px",borderRadius:"25px" ,marginTop:"20px"}}></img></CardText>
                       <CardBody>
                       <p className="tt" >What's happening?</p>
                       <CardText style={{borderLeft:"20px"}}>
                       <a  href="" onClick={this.handleFileSelect}>  <img src = {require('../../image/gal.png')} className="add" ></img></a>

                       <a data-tip data-for='happyFace' data-event='click focus'> <img src = {require('../../image/smile.png')} className="add" ></img>
                    </a>
                    
                                                    
                       <img src = {require('../../image/gif.png')} className="add" ></img>
                        
                      
                      </ CardText>
                       </CardBody>
               
               </Card>
              
                               
               <Post />
            </div>
        );
    }
}

export default NewsFeed;