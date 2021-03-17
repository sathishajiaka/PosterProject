import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component {

    constructor(props) 
    {
        super(props)

       

        this.state = 
        {
           
            uname:'Sharanya Sreekumar',
            phn:'9994392982',
            mail:'sharanyasree98@gmail.com',    
        }
    }
   

    render() {
        return (
            <div>
                <div className="accountstn">
                    <h4 id="accstn">Settings</h4>
                    <h4 id="headstn">@Sharanya</h4>
                <ul class="nav nav-tabss" id="myTab" role="tablist">
  <li class="nav-items">
    <a class="nav-link active" id="accounts-tab" data-toggle="tab" href="#accounts" role="tab" aria-controls="accounts"
      aria-selected="true">Account <FontAwesomeIcon  className="settingsicon" id="accounticon" icon={faChevronRight} /></a>
  </li>
  <li class="nav-items">
    <a class="nav-link" id="privacy-tab" data-toggle="tab" href="#privacy" role="tab" aria-controls="privacy"
      aria-selected="false">Privacy and Safety <FontAwesomeIcon  className="settingsicon" id="privacyicon" icon={faChevronRight} /></a>
  </li>
  <li class="nav-items">
    <a class="nav-link" id="content-tab" data-toggle="tab" href="#content" role="tab" aria-controls="content"
      aria-selected="false">Content Preferences<FontAwesomeIcon  className="settingsicon" id="contenticon" icon={faChevronRight} /></a>
  </li>
  <li class="nav-items">
    <a class="nav-link" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about"
      aria-selected="false">About Poster<FontAwesomeIcon  className="settingsicon" id="abouticon" icon={faChevronRight} /></a>
  </li>
  
</ul>
</div>
<hr className="settingsline"></hr> 
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="accounts" role="tabpanel" aria-labelledby="accounts-tab"> 
  <Row className="accountsnew">
                        

                        <Col>
                        <hr className="settingslines"></hr>  
                        <div className="accountlogin">
                                <h5 className="accounthead">Login and security</h5>
                                
                                <ul>

        <li className="loginli" >{this.state.uname}</li>
        <li className="loginli" >{this.state.phn}</li>
        <li className="loginli" >{this.state.mail}</li>
        <li className="loginli" >Password </li>
        <li className="loginli" >Security </li>
        <h4 className="accountdata">Data and Permissions</h4>
                                    <li className="loginli" >Display language </li>
                                    <li className="loginli" >Country</li>
                                    <li className="loginli" >Your Poster data</li>
                                    <li className="loginli" id="apsess">Apps and sessions</li>
                                    <li className="loginli" >Deactivate your account</li>
                                </ul>
                           </div>
                        
                        
                        </Col>
                        </Row>
                        </div>
                       
                    <div class="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                    <Row className="accountsnew">
                         <Col>
                        
                            <div className="accountlogin">
                                <h5 className="accounthead">Privacy and Safety</h5>
                                <h5 className="accountlosec">Tweets</h5>
                                <ul>
                                    
                                    <div className="loginlinew" > Protect Your Tweets
                                       
                                        <h6>Only show your tweets to people who follow you.If selected you need to approve each new follower.Learn more</h6>
                                        </div>
                                         {/* <hr classname="tweet"></hr>  */}
                                    <div className="loginlipic" >Photo tagging </div>
                                    <hr classname="logintweet"></hr>
                                    <li className="loginli" >Email</li>
                                    <li className="loginli" >Password</li>
                                    <li className="loginli" >Account</li>
                                </ul>
                           </div>
                        </Col>
                        </Row>
                    </div>
                    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
                        <Row className="accountsnew">
                         <Col>
                         <hr className="settingslines"></hr> 
                            <div className="accountlogin">
                                <h5 className="accounthead">Content Preferences</h5>
                                <h5 className="accountlosec">Explore</h5>
                                <ul>
                                    
                                    <li className="loginli" > Search Settings </li>
                                    <li className="loginli" id="tr" >Trends</li>
                                    <li className="loginlilang"  >Languages</li>
                                </ul>

                           </div>
                        </Col>
                        </Row>
  </div>
  <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
  <Row className="accountsnew">
                         <Col>
                         <hr className="settingslines"></hr> 
                            <div className="accountlogin">
                                <h5 className="accounthead">About Poster</h5>
                                <h5 className="accountlosec">Login and Security</h5>
                                <ul>
                                    
                                    <li className="loginliabout" > Poster is an online news and social networking site where people communicate in short messages called tweets. Tweeting is posting short messages for anyone who follows you on poster, with the hope that your messages are useful and interesting to someone in your audience. Another description of poster and tweeting might be microblogging.
 People use poster to discover interesting people and companies online, opting to follow their tweets.

 </li>
                                    
                                </ul>

                           </div>
                        </Col>
                        </Row>
  </div>
</div>
            </div>
        );
    }
}

export default Settings;
