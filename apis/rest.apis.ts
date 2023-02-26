import axios from 'axios'

const baseurl:string="http://localhost:3000/"

const asyncGet=async(api:string,option?:any)=>{
    try{
        const response=await axios.get(baseurl+api,option)
        return{data:response.data}
     
    }catch(e:any)
    {
        return{ 
            error:e?.response?.data?e?.response.data:e?.response
        }
    }
}

const asyncPost=async(api:string,payload:any,option?:any)=>{
    try{
        const response=await axios.post(baseurl+api,payload,option)
        return{data:response.data}
        
    }catch(e:any)
    {
        return{
            error:e?.response?.data?e?.response.data:e?.response
    }
    }
}

const asyncPut=async(api:string,payload:any,option?:any)=>{
    try{
        const response=await axios.put(baseurl+api,payload,option)
        return{data:response.data}
        
    }catch(e:any)
    {
        return{
            error:e?.response?.data?e?.response.data:e?.response
        }
    }
}

const asyncDelete=async(api:string)=>{
    try{
        const response=await axios.delete(baseurl+api)
        return{data:response.data}
        
    }catch(e:any)
    {
        return{
            error:e?.response?.data?e?.response.data:e?.response
        }
    }
}

export{
    asyncGet,
    asyncPost,
    asyncPut,
    asyncDelete
}