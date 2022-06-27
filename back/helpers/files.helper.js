const manageData = (filesData)=>{
    const filteredData = filterData(filesData)
    return filteredData.map((slice,i)=>{
        let objRow = {}
        objRow.file = `test${i+1}.csv`
        objRow.lines = []
        if(slice.indexOf('\n')===-1) return objRow
        let rows = slice.split('\n')
        objRow.lines= rows.slice(1).map((row,j)=>{
            let fields =row.split(',')
            if(fields.length<4) return
            let objFields = {
                text:fields[1],
                number:fields[2],
                hex:fields[3]
            } 
            return objFields
        }).filter((item)=>item)

        return objRow
    })
    
}
const filterData = (filesData)=>{
    //Deleting nulls and undefined
    return filesData.filter((item)=>item)
}

module.exports= manageData