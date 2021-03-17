import React, { Component } from 'react';
import './comment.css'
import addcmd from '../../services/servicesapi'
class CommentBox extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        showComments: false,
        comments: [
  
         
        ]
      };
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          
          <CommentForm addComment={this._addComment.bind(this)}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h4>Comments</h4>
          <h5 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h5>
          {commentNodes}
        </div>  
      );
    } // end render
    
    _addComment( body) {
      const comment = {
        id: this.state.comments.length + 1,
        
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            body={comment.body} 
            key={comment.id} />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        cm:this.props.cmd,
        cmds:''
      }
    }
    

wrcmd =(e)=>{
console.log("wi",e.target.value)
console.log('ccc',this.props.cmd)
this.setState({
cmds:e.target.value
})

}

    addcmd =()=>{
      console.log("hii",e.target.name)

      const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU2MDgwYzFjMWU3YjcxOThhMmEyNzUyIiwiaWF0IjoxNTg0NDMyMTM3LCJleHAiOjE1ODQ0NDIxMzd9.REASVbWJ6MWZc9LlCy2ij0U3tKeStkhUU2iazt8ZbvA"
     const postid=this.props.cmd;

      addcmd(token,postid,this.state.cmds).then(data=>{

        console.log("res,data",data)

          // if(data.message=="Product successfully added to like"){

          //     console.log("res", data)
          //     console.log("res", data.message)
          
          //     alert("liked")

          // }
          // else if(data.message="you are given user already liked this post"){
          
          //     alert("already liked")
          // }
         
      }).catch(err=>{console.log(err.message)})

      
    }


    render() {
      return (
        <form className="comment-form" >
          <div className="comment-form-fields">
            
            <textarea placeholder="Comment" rows="4" onChange={this.wrcmd} required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit" onClick={this.addcmd}>Pos Comment</button>
          </div>
        </form>
      );
    } // end render
    
    _handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      
      let body = this._body;
      this.props.addComment(body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          
         <b> <p className="comment-body">- {this.props.body}</p></b>
          <div className="comment-footer">
           <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
          </div>
        </div>
      );
    }
    // _deleteComment() {
    //   alert("Delete comment functionality comming Soon...");
    // }
  }
  
  
  
 
 export default CommentBox;
