import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './profileimage.css'

const ImgUpload =({
onChange,
 src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload " style={{height: "190px"}} >
    <div>  <img for="photo-upload" src={src} className="profile-format"/></div>
   
    </div>
 <input id="photo-upload" type="file" onChange={onChange}/> 
   </label>



const Name =({
  onChange,
  value
})=>
  <div className="field">
    <label htmlFor="name">name: </label>
    <input id="name" type="text" onChange={onChange} maxlength="25" value={value} placeholder="Alexa" required/>
  </div>

const Name1 =({
  onChange,
  value
})=>
  <div className="field">
    <label htmlFor="Name1">name1: </label>
    <input id="Name1" type="text" onChange={onChange} maxlength="25" value={value} placeholder="pppppppppio" required/>
  </div>

  
const Status =({
  onChange,
  value
})=>
  <div className="field">
    <label htmlFor="status">
      status:
    </label>
    <input 
      id="status" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={value} 
      placeholder="It's a nice day!" 
      required/>
  </div>


const Profile =({
  onSubmit,
  src,
  name,
  Name1,
  status,
})=>
  <div >
    <form className="namefield" onSubmit={onSubmit}>
    
      <label className="custom-file-upload fas">
        <div className="img-wrap"  style={{float:"right"}}>
        <div style={{marginBottom:"-100px"}}>  <img for="photo-upload" src={src}/></div>
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="Name1">{Name1}</div>
      <div className="status">{status}</div> 
      <button type="submit" className="edit">Edit Profile </button>
    </form>
  </div>
     
      
const Edit =({
  onSubmit,
  children,
})=>
  <div>
    <form onSubmit={onSubmit}>
     
        {children}
      <button type="submit" className="save">Done</button>
     </form>
  </div>
  // const Cancel =({
  //   onSubmit,
  //   children,
  // })=>
  //   <div>
  //     <form onSubmit={onSubmit}>
       
  //         {children}
       
  //       <button type="cancel" className="">cancel</button>
  //       <button type="reset" value="Reset" className="">Reset</button>
  
  //     </form>
  //   </div>

class CardProfile extends React.Component {
  state = {
    file: '',
    imagePreviewUrl: require('../../image/user.svg'),
    name:'', 
    Name1:'',
    status:'',
    active: 'edit'
  }

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  editName = e =>{
    const name = e.target.value;
    this.setState({
      name,
    });
  }
  editName1 = e =>{
    const Name1 = e.target.value;
    this.setState({
      Name1,
    });
  }
  
  editStatus = e => {
    const status = e.target.value;
    this.setState({
      status,
    });
  }
  
  handleSubmit= e =>{
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }
  
  render() {
    const {imagePreviewUrl, 
           name,
           Name1, 
           status, 
           active} = this.state;
    return (
      <div>
      <div>
        {(active === 'edit')?
        (
          <Edit onSubmit={this.handleSubmit}>
          
          <div>  
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} className="uploadimg"/></div>
            <Name onChange={this.editName} value={name}/>
            <Name onChange={this.editName1} value={Name1} placeholder="bio"/>
            
            <Status onChange={this.editStatus} value={status}/>
          </Edit>
        ):(
          <Profile 
            onSubmit={this.handleSubmit} 
            src={imagePreviewUrl} 
           
            name={name}
            Name1={Name1}  
            status={status}/>)}
            
      </div>
   </div >
      )
  }
}

export default CardProfile;