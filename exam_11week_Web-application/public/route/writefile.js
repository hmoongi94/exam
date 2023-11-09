const fs = require('fs')
const path = require('path')

function writefileAsync(path, parsedData){
  fs.writefile(path, JSON.stringify(parsedData, null, 2),(err)=>{
    if (err) {
      throw new Error(`error writing ${parsedData}`)
    } else {
      console.log(`${path}에 ${parsedData}가 저장되었습니다.`)
    }
  })
}

module.exports = writefileAsync