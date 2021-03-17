import React, { Component } from 'react';
import EditProfile from './EditModal'
import './profile.css'
import EditModal1 from '../../components/Profile/EditModal1'
import { Fa500Px,FaFly,FaBirthdayCake } from "react-icons/fa";
import { MdLocationOn,MdDateRange } from "react-icons/md";
// import Trends from '../Trends/Trends';

//import { Switch, Route } from './node_modules/react-router-dom';

export class Profile extends Component {
    constructor(props) 
    {
        super(props)

       

        this.state = 
        {
            post:'22',
            name:'Sharanya Sreekumar',
            username:'sharanyasree98@gmail.com',
            location:'Kannur',
            dob:'January 25, 1998',
            join:'january 2015',
            following:'125',
            followers:'60'
        }
       // this.changeRoutingProfile=this.changeRoutingProfile.bind(this);
    }

   
   
    render() {
        return (
            <div>


                    <div className="profile">
                    <h5>{this.state.name}</h5>
                    <p>{this.state.post} Posts</p>
                </div>    
                <div className="profbg">
                    <div className="profcir">
                        <img src={require("../../image/user.svg")} />
                        <div className="editprofile">
                <EditModal1 />
                
                </div>
                    </div>
                    <div className="profdet">
                        <h5>{this.state.name}</h5>
                        <p>@{this.state.username}</p>
                    </div>
                    <div className="profbio">
                        <p>
                            {/* <img src={require('../../image/placeholder.svg')} width="15px" />  */}
                          <MdLocationOn/> {this.state.location}&nbsp;&nbsp;&nbsp;
                            {/* <img src={require('../../image/gift.svg')} width="15px"/>  */}
                            <FaBirthdayCake/> {this.state.dob}&nbsp;&nbsp;&nbsp;
                            {/* <img src={require('../../image/calendar.svg')} width="15px"/>  */}
                            <MdDateRange/>{this.state.join}
                        </p>
                        <div className="follow">
                            <p><a href=""><span>{this.state.following}</span>&nbsp;Following</a></p>
                            <p><a href=""><span>{this.state.followers}</span>&nbsp;Followers</a></p>
                        </div>
                    </div>
                </div>
                {/* <hr className="sidenavline1"></hr>
            <Col sm={{ size: 'auto', offset: 1 }}><Trends /></Col>
         */}
            </div>
        );
    }
}

export default Profile;