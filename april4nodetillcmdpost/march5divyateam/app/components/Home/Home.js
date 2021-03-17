import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import SideNavBar from '../SideNavBar/SideNavBar'
import NewsFeed from '../Home/NewsFeed';
import Trends from '../Trends/Trends';
import './home.css'
import Notifications from '../Notifications/Notification';
import NotificationContainer from '../Notifications/NotificationContainer';
import Explore from '../Explore/Explore';
import ExploreContainer from '../Explore/ExploreContainer';
import { Profile } from '../Profile/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProfileContainer from '../Profile/ProfileContainer';
import Settings from '../Settings/Settings';

import SettingContainer from '../Settings/SettingContainer';
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar className="navigate" />
        <br /><br /><br />
        <Container>

          <Row>
            <Col sm={{ size: 'auto', offset: 1 }}><SideNavBar /></Col>
            <hr className="sidenavline"></hr>
            <Col sm={{ size: 'auto', offset: 1 }}>
              <Router>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/explore" Component={Explore/ExploreContainer} />
                <Route exact path="/notifications" Component={Notifications/NotificationContainer} />

                <Route exact path="/profile" Component={Profile/ProfileContainer} />
                <Route exact path="/settings" Component={Settings/SettingContainer}/>
              </Router>


            </Col>
           
            <Col sm={{ size: 'auto', offset: 1 }}><NewsFeed /></Col>
            <hr className="sidenavline1"></hr>
            <Col sm={{ size: 'auto', offset: 1 }}><Trends /></Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Home;