const rootController = ()=>{
    return (req,res,next)=>{
        res.send('Hello World')
    }
}

module.exports= rootController