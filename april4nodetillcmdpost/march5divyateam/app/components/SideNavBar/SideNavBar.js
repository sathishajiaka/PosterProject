import React, { Component } from 'react';
import './sidenavbar.css'
import {TiHome,TiBell}from 'react-icons/ti'
import {FiSettings}from 'react-icons/fi';
import {FaHashtag}from 'react-icons/fa';
import {FaUserCircle}from 'react-icons/fa';
import Modal from '../modal/modal';

class SideNavBar extends Component {
  
  //   constructor(props) {
  //   super(props);
      
  //    this.changeRoutingProfile=this.changeRoutingProfile.bind(this);   
  // }
  
  
  // changeRoutingProfile(){
  // let path = `/profile`;
  // this.props.history.push(path);
  // }


  render() {
    return (
      <div className="sidenav">
       
        <ul className="sidenavul">
          
          <li><a href="/"><TiHome/> Home</a></li>
          <li><a href="./explore"><FaHashtag/> Explore</a></li>
          <li><a href="./notifications"><TiBell/> Notifications</a></li>
    
          <li><a href="./settings"><FiSettings/> Settings</a></li>
          <li><a href="./profile"><FaUserCircle/> Profile</a></li>
          <Modal />
        </ul>
      </div>
    );
  }
}

export default SideNavBar;