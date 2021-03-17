import React, { Component } from 'react';
import { Card, CardText, CardBody,Link,CardHeader,button } from 'reactstrap';
import '../Trends/Trends.css'
class Trends extends Component {
    constructor(){
        super(); 
        this.state = {
            color_black: true,
          }
          this.state = {
            liked: false
            };
            this.handleClick = this.handleClick.bind(this);
} 
handleClick() {
this.setState({
liked: !this.state.liked
});

            
        }

        changeColor(){
                this.setState({color_black: !this.state.color_black})
        }
  
    
    render () {
        const label = this.state.liked ? 'following' : 'follow'

        let bgColor = this.state.color_black ? this.props.color : this.props.color2
        return (
            <div >
            <Card className="trend" style={{backgroundColor:"rgba(202, 255, 206, 0.6)",borderRadius:"20px"}}>
                <CardText className="th">Trends for you<img src = {require('../../image/settings.png')} alt="post1" style={{height:"22px",width:"22px",marginLeft:"130px",borderRadius:"25px" ,marginTop:"-0px"}}></img></CardText>
                <CardText></CardText>
                <CardBody>
                <CardText className="tb" onClick={this.handleClick} >#wednesdaywisdom </CardText>
                <CardText className="tb" onClick={this.handleClick} >#vaiko</CardText>
            
                    
                <CardText className="tb" onClick={this.handleClick} >#foodcorporationofindia</CardText>
                <CardText className="tb" onClick={this.handleClick} >#sanjusamson</CardText>
                    
                  
                </CardBody>
            </Card>
             
            <Card className="trenda" style={{backgroundColor:"rgba(202, 255, 206, 0.6)",borderRadius:"20px"}}>
                <CardBody>
                <CardText className="tha">Who to follow<img src = {require('../../image/settings.png')} alt="post1" style={{height:"22px",width:"22px",marginLeft:"130px",borderRadius:"25px" ,marginTop:"-0px"}}></img></CardText>
            
                <CardHeader  ><img src = {require('../../image/pk.jpg')} alt="profie icon" className="ha"></img></CardHeader>
        <p className='naa'onClick={this.handleClick}> PawanKalyan</p>
        <p className='aa'>@pawankalyan  </p>
        <p className="aac"><button className="btn btn-primary" onClick={this.handleClick}>
{label}</button></p>

<CardHeader  ><img src = {require('../../image/rk.jpg')} alt="profie icon" className="ha"></img></CardHeader>
        <p className='naa'onClick={this.handleClick}> RajiniKanth</p>
        <p className='aa'>@rajanikanth  </p>
        <p className="aac"><button className="btn btn-primary" onClick={this.handleClick}>
{label}</button></p>
        

       
                  
                </CardBody>
            </Card>
            
            </div>

        );
    }
}

export default Trends;


