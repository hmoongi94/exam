const fs = require('fs')
const path = require('path')

function writefileAsync(path, parsedData){
  // * 여기서 데이터를 가공한거를 받아야함. 콜백함수 자리를 만들어서 여기서 가공을 한거를 writefile해보자.

  fs.writefile(path, JSON.stringify(parsedData, null, 2),(err)=>{
    if (err) {
      throw new Error(`error writing ${parsedData}`)
    } else {
      console.log(`${path}에 ${parsedData}가 저장되었습니다.`)
    }
  })
}

module.exports = writefileAsync