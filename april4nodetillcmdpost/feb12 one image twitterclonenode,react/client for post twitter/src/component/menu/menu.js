import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './menu.css';
import{TiHome,TiBell,TiSpanner,TiUser} from 'react-icons/ti';
import {FaHashtag}from 'react-icons/fa';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {FiSettings}from 'react-icons/fi';
import Modals from '../modal/modal'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Menu } from "@material-ui/core";


 class Navigation extends Component {

    render() {
      return (
        <div>
    

    
 
   

    
<Nav  navbar className="navtop">
   <NavItem className=" nav">
      <NavLink className="navlink s" href="/"><TiHome/> <h6>Home</h6></NavLink> 
   </NavItem> 
   <NavItem className="nav">
   <NavLink className="navlink s" href="/"><FaHashtag/> <h6>Explore</h6></NavLink> 
   </NavItem >
   <NavItem className="nav">
      <NavLink className="navlink s" href="/"><TiBell/> <h6>Notifications</h6></NavLink> 
   </NavItem> 
   <NavItem className="nav">
      <NavLink className="navlink s" href="/"><FiSettings/>  <h6>Settings</h6> </NavLink> 
   </NavItem>
   <NavItem className="nav">
      <NavLink className="navlink s" href="/"><AccountCircleIcon/><h6>Profile</h6> </NavLink> 
   </NavItem> 

   <NavItem className="navp">
   <Modals/>
   </NavItem> 


</Nav>



        </div>
      );
    }
  }

  export default Navigation;


