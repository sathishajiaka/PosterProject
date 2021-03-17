import React, { Component } from 'react';
import { Col,Row, Container } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import SideNavBar from '../SideNavBar/SideNavBar'
import Trends from '../Trends/Trends';
import Notification from '../Notifications/Notification'
import './notify.css';
class ProfileContainer extends Component {


  
    render() {
        return (
          <div>
            <Navbar />
            <br/><br/><br/>
            <Container>

      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}><SideNavBar /></Col>
        <hr className="sidenavline"></hr>
        <Col sm={{ size: 'auto', offset: 1 }}><Notification /></Col>
        <hr className="sidenavline1"></hr>     
        <Col sm={{ size: 'auto', offset: 1 }}><Trends /></Col>

      </Row>
    </Container>
          </div>
        );
    }
}

export default ProfileContainer;