
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

        const response = await fetch(`v1/createPost`,{

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

        return  response.json()

    }
    catch (e) 
    {

        throw e
    }
}



const getallpost = async function (){

    try 
    {

        const response = await fetch(`v1/getallpostcommon`, 
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



export { rough,poster,getallpost}



