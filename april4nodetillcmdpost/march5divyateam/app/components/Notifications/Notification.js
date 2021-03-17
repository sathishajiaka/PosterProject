import React, { Component } from 'react';
import { Container, Row, Col,Card } from 'reactstrap';

import './notify.css'

import Tabs  from '../Notifications/profileTabs';
import { throwStatement } from '@babel/types';
import { IoIosHelpCircleOutline } from 'react-icons/io';



class Notification extends Component {
constructor(props) {
  super(props);
  this.state = {

    token:'',
    likes:["hi","IoIosHelpCircleOutline"]
  };
}
 

  componentDidMount() {

        const token = localStorage.getItem('token')

    
    fetch(`http://localhost:5000/v1/getlike`, {
      method: 'get',
      headers: {
          'Authorization': token,

      }
  })
      .then(res => res.json())
      .then(response => { 

        alert("ckmk");

          if(response.message = "sucessfully get all you post likes list")
{
  console.log("res", response) 
  console.log("res", response.userwish[0]._id) 
  console.log("res3",response.userwish[0].likes[0].firstName) 
  


  alert("ckmks");
  this.setState({
    likes:response.userwish,
    // li:response.result.likes
  })
          }
       
        
  }).catch(err => { console.log("eer", err.message) })

}
  


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
      <Tabs.Tab id="tab1" title="All">
        <div style={{ padding: 10 }}>
 
      {

this.state.likes.map((item, index) => (
      <Card style={{width:'107.4%',height:'80px',marginTop:'2px',marginLeft:"-29px"}}> 
        <img src = {require('../../image/rk.jpg')} alt="profie icon"style={{width:'60px',height:'60px',marginTop:'10px',marginLeft:"20px",borderRadius:"35px"}}></img>
<h6 style={{marginTop:'-43px',marginLeft:"90px"}} >"postid":{item['_id']} ,likes:</h6>
        {/* <h6 style={{marginTop:'-43px',marginLeft:"90px"}}>{item[index]}</h6> */}

    </Card>
       
))

}

        {/* <Card style={{width:'107.4%',height:'80px',marginTop:'2px',marginLeft:"-29px"}}> 
        <img src = {require('../../image/rk.jpg')} alt="profie icon"style={{width:'60px',height:'60px',marginTop:'10px',marginLeft:"20px",borderRadius:"35px"}}></img>
        <h6 style={{marginTop:'-43px',marginLeft:"90px"}}>Team-1 like Your post.</h6>
    </Card>
       
        */}
         
         {/* <h1>udud</h1> */}
              
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Mention">
        <div style={{ padding: 15 }}>
        <Card style={{width:'109.%',height:'80px',marginTop:'-4px',marginLeft:"-33px"}}> 
        <h6 style={{marginTop:'30px',marginLeft:"90px"}}>Your mail-id update sucessfuly.</h6>
        </Card>
        <Card style={{width:'109.%',height:'80px',marginTop:'2px',marginLeft:"-33px"}}>
        <h6 style={{marginTop:'30px',marginLeft:"90px"}}>Your phone number update sucessfuly.</h6>
           </Card>

               
                     
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