const axios = require('axios')


const getFiles = ()=>{
    return axios.get('https://echo-serv.tbxnet.com/v1/secret/files',{
        headers:{
            'authorization':'Bearer aSuperSecretKey'
        }
    }).then((res)=>{
        return res.data
    })
}


const getFile = (name)=>{
    return axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${name}`,{
        headers:{
            'authorization':'Bearer aSuperSecretKey'
        }
    })
}

module.exports= {getFiles,getFile}