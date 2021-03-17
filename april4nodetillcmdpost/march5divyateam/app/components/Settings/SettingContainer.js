import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Col,Row, Container } from 'reactstrap';
import SideNavBar from '../SideNavBar/SideNavBar'
import Settings from './Settings';
import './Settings.css'

class SettingContainer extends Component {
    render() {
        return (
            <div>
            <Navbar className="navigate"/>
            <br/><br/><br/>
            <Container>
        <Row>
        <Col sm={{ size: 'auto', offset: 1 }}><SideNavBar /></Col>
        <hr className="sidenavline"></hr>
        <Col sm={{ size: 'auto', offset: 1 }}><Settings /></Col>
        </Row>
        </Container>
            </div>
        );
    }
}

export default SettingContainer;