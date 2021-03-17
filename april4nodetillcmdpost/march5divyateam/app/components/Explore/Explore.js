import React, { Component } from 'react';
import { Container, Row, Col,Card } from 'reactstrap';

import './expo.css'

import Tabs  from '../Explore/profileTabs';



class Notification extends Component {

    render() {
        return (
                <Container>
                  
                   
                    <Row>
                    <div >

                    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab3" title="Foryou">
        <div style={{ padding: 1 }}>
        <Card style={{width:'90%',height:'120px',marginTop:'2px',marginLeft:"-20px"}}> 
        <img src = {require('../../image/dd.png')} alt="profie icon"style={{width:'85px',height:'85px',marginTop:'25px',marginLeft:"15px",borderRadius:"5px"}}></img>
        <h6 style={{marginTop:'-80px',marginLeft:"110px"}}>After World T20 heartbreak to Windies at Wankhede three and a half years ago, India exact revenge in Mumbai.</h6>
    </Card>
        </div>
      </Tabs.Tab>

      <Tabs.Tab id="tab4" title="News">
        <div style={{ padding: 1 }}>
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab5" title="Sport">
        <div style={{ padding: 1 }}>
        <Card style={{width:'90%',height:'120px',marginTop:'2px',marginLeft:"-20px"}}> 
        <img src = {require('../../image/dd.png')} alt="profie icon"style={{width:'85px',height:'85px',marginTop:'25px',marginLeft:"15px",borderRadius:"5px"}}></img>
        <h6 style={{marginTop:'-80px',marginLeft:"110px"}}>After World T20 heartbreak to Windies at Wankhede three and a half years ago, India exact revenge in Mumbai.</h6>
    </Card>
       
       
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab6" title="Fun">
        <div style={{ padding: 1 }}>
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab7" title="Entertain">
        <div style={{ padding: 1 }}>
        </div>
      </Tabs.Tab>
     
    </Tabs>
    </div>
                    </Row>

                </Container>



        );
    }
}

export default Notification;