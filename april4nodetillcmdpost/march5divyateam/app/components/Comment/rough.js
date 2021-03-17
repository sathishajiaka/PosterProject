

<div class="container">

{/* <Button type="button" className="button" onClick={this.toggle}>{this.props.buttonLabel}Post</Button> 
*/}

<Button type="button"  className="button" data-toggle="modal" data-target="#myModal" onClick={this.toggle}>{this.props.buttonLabel} 

Post
</Button>


<div class="modal" id="myModal" >
<div class="modal-dialog">
<div class="modal-content"  style={{"width":"600px","height":"320px","borderRadius":"16px"}}>

{/* <ModalHeader toggle={this.toggle} close={closeBtn} style={{"backgroundColor":"white","width":"550px"}}  ></ModalHeader> */}

<div class="modal-header" >
     <button type="button" style={{"color":"green","marginLeft":"0px"}}  class="close" data-dismiss="modal">&times;</button>
</div>


<div class="modal-body">
<FaUserCircle className="texttopicon" />

                
                 <textarea placeholder="Whats happening?" maxLength=""></textarea>

         


</div>


<div class="modal-footer">
{/* <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> */}
<FaImage className="footfirst" />
           <FaRegSmile className="footsecond" />
             <IoIosAddCircleOutline className="footthird" />
<Button type="submit" className="postsuccess" onClick={this.toggle} >Post</Button>{' '}

</div>

</div>
</div>
</div>

</div>
