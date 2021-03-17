import React, { Component } from 'react';
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import '../Newsfeed/Post.css'
import Comment from '../Comment/modal'
import { getallpost, like, unlike } from '../../services/servicesapi'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
            ],
            likeicon: <IoMdHeartEmpty />,
            classlike: "heartlike",
            data: [],
            h: 'hi',
            likeuserid: '',
            ss: 'like',
            ss1: 'unlike',
            like: false
        };

    }


    componentDidMount() {

        getallpost().then(data => {
            let heart;


            if (data.result == 'successfully get your post details') {

                // for (var i = 0; i < data.message.length; i++) {
                //     console.log('data', data.message[i].likes)
                //     console.log('datas', data.message[i].likes[i])
                //     if (data.message[i].likes[i] == "5e6080c1c1e7b7198a2a2752") {

                //         heart = "hello";
                //         this.setState({


                //             likeuserid: "5e6080c1c1e7b7198a2a2752"
                //         })
                //         console.log("yes this user is liked this post")
                //     }


                // }

                this.setState({
                    isLoaded: true,

                    data: data.message,

                })


            }
        }).catch(err => { console.log(err.message) })

    }

    addlike = (h) => {
        console.log("post id ", h)




    }

    timing = (e) => {
        console.log("hii", e.target.name)
        const token = localStorage.getItem('token')

        // // // const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU2MDgwYzFjMWU3YjcxOThhMmEyNzUyIiwiaWF0IjoxNTg0NDM2MTY1LCJleHAiOjE1ODQ0NDYxNjV9.pfcqM6-q0gb3mytN9KZuBXAFF6OmjjyMxN3LgeUlON8"
        const postid = e.target.name;

        like(token, postid).then(data => {

            if (data.message == "Product successfully added to like") {

                console.log("res", data)
                console.log("res", data.message)

                alert("liked")

            }
            else if (data.message == "you are given user already liked this post") {

                alert("already liked")
       }

        }
        ).catch(err => { console.log(err.message) })



    }


    unlikes = (e) => {
        console.log("hii", e.target.name)



        const token = localStorage.getItem('token')


        // const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU2MDgwYzFjMWU3YjcxOThhMmEyNzUyIiwiaWF0IjoxNTg0NDIyMTY5LCJleHAiOjE1ODQ0MzIxNjl9.R-udiUAGCPubObBFnoRKo2X10SNufdO4eEB6CAIhhKg"
        const postid = e.target.name;

        unlike(token, postid).then(data => {

            if (data.message == "Product successfully removed to likelist") {

                console.log("res", data)
                console.log("res", data.message)

                alert("Unliked")

            }
            else if (data.message == "you are given posid is not exists in your likelist") {

                alert("Already Unliked")
            }

        }).catch(err => { console.log(err.message) })




    }

    render() {

        return (
            <div className='foo'>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>




                {

                    this.state.data.map((item, index) => (

                        <Card className="card"  >
                            <div>
                            <CardText  ><img src={require('../modal/Vector.png')} alt="profie icon" className="h"
                                // <CardText  ><img src={require('../../image/Vector.png')} alt="profie icon" className="h"
                                ></img></CardText>
                                <p className='na'> {item.user.userName}</p>
                    {/* <p className='a' onClick={this.handleClick}>@foodball . 5m{item['_id']}</p> */}
                    
           
                            </div>
                            <CardBody>

                                <CardText className="ct">{item['body']} </CardText>
                                <CardTitle><img src={` http://localhost:5000/${item['media']['mediasource']}`} alt="post1" className="post"
                                ></img></CardTitle>

                            </CardBody>
                            {/* <CardText> <p className="comm"> <Comment cmd={item['_id']}/></p>
                                <img src={require('../../image/bar.png')} alt="send icon" className="f"
                                ></img>
                           
                           </CardText> */}

                            {/* <button style={{'color':'red;'}} onClick={this.time} name={item['_id']} >{this.state.ss}</button> */}


                            <CardFooter className="CardFooter" style={{'backgroundColor':"white","border":"none"}}>
                                <p className="comm">
                                    <Comment cmd={item['_id']} /></p>

                                <img src={require('../../image/bar.png')} alt="send icon" className="f"
                                ></img>


                                {/* <img src={require('../../image/bar.png')} alt="send icon" className="lik"
                                ></img>  */}


                                <button  className="lik" onClick={this.timing} name={item['_id']}>

                                Like
                                

</button>
                                <button onClick={this.unlikes} name={item['_id']} className="unlik">

Unlike   
</button>
                                {/* <button className="lik" onClick={this.time} name={item['_id']} >l</button>
<button className="unlik" onClick={this.unlikes} name={item['_id']} >u</button>   */}

                            </CardFooter>



                        </Card>

                    ))}
            </div>
        );

    }

}


export default Post;










// componentWillMount(){

//     getallpost().then(data=>{


//         // "result": "successfully get your post details"            

//         if(data.result==='successfully get your post details'){

//            this.setState({isLoaded:true,

//             data:data.message

//         })


//         }
//     }).catch(err=>{console.log(err.message)})

// }



// render() {
//     if(!this.state.isLoaded){
//         return(
//         <div style={{height:'300px'}}>

//             {/* <h1 style={{marginTop:'18%' ,marginBottom:'20%',color:'red'}}>

//                 <Spinner animation="border" role="status">

//                         <span className="sr-only">Loading...</span>

//                 </Spinner>

//             </h1> */}

// <h1 style={{'color':'red'}}>          <marquee>still loading...</marquee>      </h1>
//         </div>
//         )

//     }

//     return (
//         <div style={{'backgroundColor':'pink','width':'auto','height':'auto'}}>
//             <h3 >hi</h3>

//             <div style={{height:'40px'}}></div>
//         <div className='row' style={{width:'1000px',height:'500px',overflowX:'hidden' ,padding:'30px'}}> 

//         {

//            this.state.data.map((item,index)=>(



//             <div className='col-sm-12 col-lg-3' style={{backgroundColor: '',}} key={index}>
//                 <Card style={{ width: '100%' ,height:'350px' ,marginTop:'20px'}}>
//                     <h5>uygfty</h5>
//                 {/* http://localhost:5000/uploads/0adc2ecc-997b-47e4-916c-41ed9c3007ee-images.jpeg */}
//                 <Card.Img variant="top" src={` http://localhost:5000/${item['media']['mediasource']}`} style={{height:'50%'}}/>
//                  {/* <Card.Img variant="top" src={require(`../../../../server for post twitter/ ${item['media']['mediasource']}`)} style={{height:'50%'}}/> */}
// //  {/* ${item['media']['mediasource']}`)} style={{height:'50%'}}/> */}

//                     <Card.Body style={{'backgroundColor':'skyblue'}}>

//                         <Card.Title>

//                             {item['_id']} <br/>

//                             Rs . {item['body']}<br/>

//                         </Card.Title>

//                         {/* <Button  style={{width:'45%',marginRight:'5px',backgroundColor:'green'}}
//                         onClick={this.openUpdateModal} value={item['_id']}
//                         >
//                             UPDATE
//                         </Button> */}
// {/*                         
//                     <UpdateModal id={item['_id']} />
//                       < Deleteproduct id={item['_id']}/>
//                        */}
//                     </Card.Body >

//                 </Card>

//             </div>
//         )

//         ) 
//         }


//         </div>
//     </div>
//     )
// }
