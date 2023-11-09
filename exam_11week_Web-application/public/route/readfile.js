const fs = require('fs')
const path = require('path')

function readFileAndParseASync (fileName){
  fs.readFile(path.join(__dirname, `../data/${fileName}`),'utf8',(err,filedata)=>{
    if(err){
      throw new Error(`${fileName}을 읽지 못하였습니다.`)
    } else{
      JSON.parse(filedata)
    }
  })
  
}

module.exports = readFileAndParseASync;