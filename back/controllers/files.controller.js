const {getFiles,getFile} = require('../services/files.service')
const manageData = require('../helpers/files.helper')
const filesController =  ()=>{
    return (req,res,next)=>{
        let filesData = []
        getFiles().then(async (data)=>{
            filesData = await Promise.all(data.files.map(async (fileName)=>{
                try{
                    let res =await getFile(fileName)
                    return res.data 
                  
                }catch(err){
                    console.error(`err ${fileName}`)
                }
            })
            )
            res.send(manageData(filesData))
            //res.send(filesData)
        })
    }
}

module.exports= filesController