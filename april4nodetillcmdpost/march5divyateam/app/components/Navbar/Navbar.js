import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                  <div className="navbar" >
                  <h1  className="head">POSTER.</h1>
                    <input type="text" placeholder="Search" className="searchip" />
                    <div style={{color:"#65a844",fontFamily:"Segoe UI",marginTop:"-250px"}}>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;