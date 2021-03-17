import React, { Component } from 'react'
import {Card ,Button ,Spinner } from 'react-bootstrap'
// import i from '../../../../client for post twitter/images.jpeg'
// import i from './home/develop/Videos/feb12 one image twitterclonenode,react/server for post twitter/public/images/787bd5bc-2a81-4c94-b018-a67c17b194c4-55.jpg'
// import i from '../../images/Vector (2).png'
// client for post twitter/src/images/Vector (2).png
 import {getallpost} from '../../services/s'
//  import UpdateModal from '../updateproduct/updateproduct'
// import Deleteproduct from '../deleteproduct/deleteproduct'
 const isEmpty = require('is-empty')


class getallproductsforadmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
          
              history:'',
              isLoaded:false,
            data:[] ,
            isLogin : false,
            token:'',
            showLogin:false ,
            showAddProduct :false
            };
    }




    // UNSAFE_componentWillMount(){

    //     var token = localStorage.getItem('token')

    //     if(!isEmpty(token))
    //     {

    //         this.setState(
    //             {
    //                 isLogin:true ,
    //                 token : token
    //             }
    //         )

    //     }
    // }

    componentWillMount(){

        getallpost().then(data=>{

            
            // "result": "successfully get your post details"            

            if(data.result==='successfully get your post details'){

               this.setState({isLoaded:true,

                data:data.message
                
            })
           

            }
        }).catch(err=>{console.log(err.message)})

    }

     

  

    closeLogin = () =>
    {

        this.setState(
            {
                UpdateProductId:'',
                showLogin:false 
                
            }
            )

    }

    

    render() {
        if(!this.state.isLoaded){
            return(
            <div style={{height:'300px'}}>

                {/* <h1 style={{marginTop:'18%' ,marginBottom:'20%',color:'red'}}>

                    <Spinner animation="border" role="status">

                            <span className="sr-only">Loading...</span>

                    </Spinner>

                </h1> */}

<h1 style={{'color':'red'}}>          <marquee>still loading...</marquee>      </h1>
            </div>
            )

        }
        return (
            <div style={{'backgroundColor':'pink','width':'auto','height':'auto'}}>
                <h1>hi</h1>

                <div style={{height:'40px'}}></div>
            <div className='row' style={{width:'1000px',height:'500px',overflowX:'hidden' ,padding:'30px'}}> 
             
            {

               this.state.data.map((item,index)=>(
               
               

                <div className='col-sm-12 col-lg-3' style={{backgroundColor: '',}} key={index}>
                    <Card style={{ width: '100%' ,height:'350px' ,marginTop:'20px'}}>
                    {/* http://localhost:5000/uploads/0adc2ecc-997b-47e4-916c-41ed9c3007ee-images.jpeg */}
                    <Card.Img variant="top" src={` http://localhost:5000/${item['media']['mediasource']}`} style={{height:'50%'}}/>
                     {/* <Card.Img variant="top" src={require(`../../../../server for post twitter/ ${item['media']['mediasource']}`)} style={{height:'50%'}}/> */}
//  {/* ${item['media']['mediasource']}`)} style={{height:'50%'}}/> */}
                     
                        <Card.Body style={{'backgroundColor':'skyblue'}}>
                         
                            <Card.Title>

                                {item['_id']} <br/>

                                Rs . {item['body']}<br/>
                           
                            </Card.Title>
                           
                            {/* <Button  style={{width:'45%',marginRight:'5px',backgroundColor:'green'}}
                            onClick={this.openUpdateModal} value={item['_id']}
                            >
                                UPDATE
                            </Button> */}
{/*                         
                        <UpdateModal id={item['_id']} />
                          < Deleteproduct id={item['_id']}/>
                           */}
                        </Card.Body >
                    
                    </Card>
                    
                </div>
            )

            ) 
            }
                

            </div>
        </div>
        )
    }
        
 
}

export default getallproductsforadmin;