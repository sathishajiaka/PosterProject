
const rough = async function (){

    try 
    {

        const response = await fetch('/s', 
        {

            method: 'get',

            headers: {

                'Content-Type': 'application/json',
            }

        })

        return await response.json()

    }
    catch (e) 
    {

        throw e

    }

}





const poster = async function (Id,formData){

    try {

        const response = await fetch(`http://localhost:5000/v1/createPost`,{

            method: 'post',
            headers: {
                'Authorization':Id
              },
                          body:formData

          // fetch(`http://localhost:5000/v1/createPost/${id}`,{
        //     method:'post',
        //     body:formData
        // })

        })

        return  response

    }
    catch (e) 
    {

        throw e
    }
}



const getallpost = async function (){

    try 
    {

        const response = await fetch(`http://localhost:5000/v1/getallpostcommon`, 
        {

            method: 'get',

            headers: {

                'Content-Type': 'application/json',
            }

        })

        return await response.json()

    }
    catch (e) 
    {

        throw e

    }

}



const like =  async function (token,postid){
    try {



        const response = await fetch('http://localhost:5000/v1/addlike', {

            method: 'put',
            
                   
            headers: {

                'Content-Type': 'application/json',
                'Authorization':token


            },

            body: JSON.stringify({

                postid: postid,
                

            })

        })

        return await response.json()

    }
    catch (e)
     {

        throw e

    }

}
const unlike =  async function (token,postid){
    try {



        const response = await fetch('http://localhost:5000/v1/removelike', {

            method: 'put',
            
                   
            headers: {

                'Content-Type': 'application/json',
                'Authorization':token


            },

            body: JSON.stringify({

                postid: postid,
                

            })

        })

        return await response.json()

    }
    catch (e)
     {

        throw e

    }

}
const addcmd =  async function (token,postid,cmdvalue){
    try {



        const response = await fetch('http://localhost:5000/v1/addcmd', {

            method: 'put',
            
                   
            headers: {

                'Content-Type': 'application/json',
                'Authorization':token


            },

            body: JSON.stringify({

                postid: postid,
                cmd:cmdvalue

                

            })

        })

        return await response.json()

    }
    catch (e)
     {

        throw e

    }

}

export { rough,poster,getallpost,like,unlike,addcmd}



