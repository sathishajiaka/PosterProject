import React, { Component } from 'react';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
class Mess extends Component {
    constructor(){
        super(); 
      
        }
       
  
    
    render () {
       
        return (
            <div>
            <Picker set='emojione' />
            <Picker onSelect={this.addEmoji} />
            </div>

        );
    }
}

export default Mess;


